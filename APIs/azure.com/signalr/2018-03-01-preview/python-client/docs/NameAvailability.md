# NameAvailability

Result of the request to check name availability. It contains a flag and possible reason of failure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The message of the operation. | [optional] 
**name_available** | **bool** | Indicates whether the name is available or not. | [optional] 
**reason** | **str** | The reason of the availability. Required if name is not available. | [optional] 

## Example

```python
from openapi_client.models.name_availability import NameAvailability

# TODO update the JSON string below
json = "{}"
# create an instance of NameAvailability from a JSON string
name_availability_instance = NameAvailability.from_json(json)
# print the JSON string representation of the object
print(NameAvailability.to_json())

# convert the object into a dict
name_availability_dict = name_availability_instance.to_dict()
# create an instance of NameAvailability from a dict
name_availability_from_dict = NameAvailability.from_dict(name_availability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


