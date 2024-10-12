# CollectionsSort


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**by** | **str** | The field on which to sort the Collections | [optional] 
**direction** | [**SortDirection**](SortDirection.md) |  | [optional] [default to SortDirection.ASC]

## Example

```python
from openapi_client.models.collections_sort import CollectionsSort

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionsSort from a JSON string
collections_sort_instance = CollectionsSort.from_json(json)
# print the JSON string representation of the object
print(CollectionsSort.to_json())

# convert the object into a dict
collections_sort_dict = collections_sort_instance.to_dict()
# create an instance of CollectionsSort from a dict
collections_sort_from_dict = CollectionsSort.from_dict(collections_sort_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


