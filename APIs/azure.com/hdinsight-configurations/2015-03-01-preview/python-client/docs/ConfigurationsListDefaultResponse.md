# ConfigurationsListDefaultResponse

Describes the format of Error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.configurations_list_default_response import ConfigurationsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationsListDefaultResponse from a JSON string
configurations_list_default_response_instance = ConfigurationsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(ConfigurationsListDefaultResponse.to_json())

# convert the object into a dict
configurations_list_default_response_dict = configurations_list_default_response_instance.to_dict()
# create an instance of ConfigurationsListDefaultResponse from a dict
configurations_list_default_response_from_dict = ConfigurationsListDefaultResponse.from_dict(configurations_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


