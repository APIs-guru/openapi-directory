# Duplicate

Information about the location that this location duplicates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | Indicates whether the user has access to the location it duplicates. | [optional] 
**location_name** | **str** | The resource name of the location that this duplicates. Only populated if the authenticated user has access rights to that location and that location is not deleted. | [optional] 
**place_id** | **str** | The place ID of the location that this duplicates. | [optional] 

## Example

```python
from openapi_client.models.duplicate import Duplicate

# TODO update the JSON string below
json = "{}"
# create an instance of Duplicate from a JSON string
duplicate_instance = Duplicate.from_json(json)
# print the JSON string representation of the object
print(Duplicate.to_json())

# convert the object into a dict
duplicate_dict = duplicate_instance.to_dict()
# create an instance of Duplicate from a dict
duplicate_from_dict = Duplicate.from_dict(duplicate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


