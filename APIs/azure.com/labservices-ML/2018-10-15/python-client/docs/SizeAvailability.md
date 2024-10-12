# SizeAvailability

Represents the size information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_available** | **bool** | Whether or not this size category is available | [optional] 
**size_category** | **str** | The category of the size (Basic, Standard, Performance). | [optional] 

## Example

```python
from openapi_client.models.size_availability import SizeAvailability

# TODO update the JSON string below
json = "{}"
# create an instance of SizeAvailability from a JSON string
size_availability_instance = SizeAvailability.from_json(json)
# print the JSON string representation of the object
print(SizeAvailability.to_json())

# convert the object into a dict
size_availability_dict = size_availability_instance.to_dict()
# create an instance of SizeAvailability from a dict
size_availability_from_dict = SizeAvailability.from_dict(size_availability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


