# ParentList

A list of a file's parents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | The ETag of the list. | [optional] 
**items** | [**List[ParentReference]**](ParentReference.md) | The list of parents. | [optional] 
**kind** | **str** | This is always &#x60;drive#parentList&#x60;. | [optional] [default to 'drive#parentList']
**self_link** | **str** | A link back to this list. | [optional] 

## Example

```python
from openapi_client.models.parent_list import ParentList

# TODO update the JSON string below
json = "{}"
# create an instance of ParentList from a JSON string
parent_list_instance = ParentList.from_json(json)
# print the JSON string representation of the object
print(ParentList.to_json())

# convert the object into a dict
parent_list_dict = parent_list_instance.to_dict()
# create an instance of ParentList from a dict
parent_list_from_dict = ParentList.from_dict(parent_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


