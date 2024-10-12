# SoftwareUpdateConfigurationRunsListDefaultResponse

Error response of an operation failure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.software_update_configuration_runs_list_default_response import SoftwareUpdateConfigurationRunsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareUpdateConfigurationRunsListDefaultResponse from a JSON string
software_update_configuration_runs_list_default_response_instance = SoftwareUpdateConfigurationRunsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(SoftwareUpdateConfigurationRunsListDefaultResponse.to_json())

# convert the object into a dict
software_update_configuration_runs_list_default_response_dict = software_update_configuration_runs_list_default_response_instance.to_dict()
# create an instance of SoftwareUpdateConfigurationRunsListDefaultResponse from a dict
software_update_configuration_runs_list_default_response_from_dict = SoftwareUpdateConfigurationRunsListDefaultResponse.from_dict(software_update_configuration_runs_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


