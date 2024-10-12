# NameAvailabilityParameters

Data POST-ed to the nameAvailability action

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The SignalR service name to validate. e.g.\&quot;my-signalR-name-here\&quot; | 
**type** | **str** | The resource type. Should be always \&quot;Microsoft.SignalRService/SignalR\&quot;. | 

## Example

```python
from openapi_client.models.name_availability_parameters import NameAvailabilityParameters

# TODO update the JSON string below
json = "{}"
# create an instance of NameAvailabilityParameters from a JSON string
name_availability_parameters_instance = NameAvailabilityParameters.from_json(json)
# print the JSON string representation of the object
print(NameAvailabilityParameters.to_json())

# convert the object into a dict
name_availability_parameters_dict = name_availability_parameters_instance.to_dict()
# create an instance of NameAvailabilityParameters from a dict
name_availability_parameters_from_dict = NameAvailabilityParameters.from_dict(name_availability_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


