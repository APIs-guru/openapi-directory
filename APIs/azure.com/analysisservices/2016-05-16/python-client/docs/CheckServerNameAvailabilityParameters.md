# CheckServerNameAvailabilityParameters

Details of server name request body.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name for checking availability. | [optional] 
**type** | **str** | The resource type of azure analysis services. | [optional] [default to 'Microsoft.AnalysisServices/servers']

## Example

```python
from openapi_client.models.check_server_name_availability_parameters import CheckServerNameAvailabilityParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CheckServerNameAvailabilityParameters from a JSON string
check_server_name_availability_parameters_instance = CheckServerNameAvailabilityParameters.from_json(json)
# print the JSON string representation of the object
print(CheckServerNameAvailabilityParameters.to_json())

# convert the object into a dict
check_server_name_availability_parameters_dict = check_server_name_availability_parameters_instance.to_dict()
# create an instance of CheckServerNameAvailabilityParameters from a dict
check_server_name_availability_parameters_from_dict = CheckServerNameAvailabilityParameters.from_dict(check_server_name_availability_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


