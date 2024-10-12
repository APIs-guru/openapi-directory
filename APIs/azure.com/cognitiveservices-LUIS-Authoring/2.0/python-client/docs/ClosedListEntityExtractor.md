# ClosedListEntityExtractor

List Entity Extractor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sub_lists** | [**List[SubClosedListResponse]**](SubClosedListResponse.md) | List of sublists. | [optional] 
**id** | **str** | The ID of the Entity Model. | 
**name** | **str** | Name of the Entity Model. | [optional] 
**readable_type** | [**ReadableType**](ReadableType.md) |  | 
**type_id** | **int** | The type ID of the Entity Model. | [optional] 
**roles** | [**List[EntityRole]**](EntityRole.md) | List of Pattern.Any Entity Extractors. | [optional] 

## Example

```python
from openapi_client.models.closed_list_entity_extractor import ClosedListEntityExtractor

# TODO update the JSON string below
json = "{}"
# create an instance of ClosedListEntityExtractor from a JSON string
closed_list_entity_extractor_instance = ClosedListEntityExtractor.from_json(json)
# print the JSON string representation of the object
print(ClosedListEntityExtractor.to_json())

# convert the object into a dict
closed_list_entity_extractor_dict = closed_list_entity_extractor_instance.to_dict()
# create an instance of ClosedListEntityExtractor from a dict
closed_list_entity_extractor_from_dict = ClosedListEntityExtractor.from_dict(closed_list_entity_extractor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


