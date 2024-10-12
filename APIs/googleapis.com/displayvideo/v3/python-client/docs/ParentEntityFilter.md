# ParentEntityFilter

A filtering option that filters on selected file types belonging to a chosen set of filter entities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_type** | **List[str]** | Required. File types that will be returned. | [optional] 
**filter_ids** | **List[str]** | The IDs of the specified filter type. This is used to filter entities to fetch. If filter type is not &#x60;FILTER_TYPE_NONE&#x60;, at least one ID must be specified. | [optional] 
**filter_type** | **str** | Required. Filter type used to filter fetched entities. | [optional] 

## Example

```python
from openapi_client.models.parent_entity_filter import ParentEntityFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ParentEntityFilter from a JSON string
parent_entity_filter_instance = ParentEntityFilter.from_json(json)
# print the JSON string representation of the object
print(ParentEntityFilter.to_json())

# convert the object into a dict
parent_entity_filter_dict = parent_entity_filter_instance.to_dict()
# create an instance of ParentEntityFilter from a dict
parent_entity_filter_from_dict = ParentEntityFilter.from_dict(parent_entity_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


