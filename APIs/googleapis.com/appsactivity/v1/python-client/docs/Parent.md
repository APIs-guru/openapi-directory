# Parent

Contains information about a parent object. For example, a folder in Drive is a parent for all files within it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The parent&#39;s ID. | [optional] 
**is_root** | **bool** | Whether this is the root folder. | [optional] 
**title** | **str** | The parent&#39;s title. | [optional] 

## Example

```python
from openapi_client.models.parent import Parent

# TODO update the JSON string below
json = "{}"
# create an instance of Parent from a JSON string
parent_instance = Parent.from_json(json)
# print the JSON string representation of the object
print(Parent.to_json())

# convert the object into a dict
parent_dict = parent_instance.to_dict()
# create an instance of Parent from a dict
parent_from_dict = Parent.from_dict(parent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


