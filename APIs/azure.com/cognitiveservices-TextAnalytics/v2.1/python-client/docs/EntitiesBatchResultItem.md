# EntitiesBatchResultItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[EntityRecord]**](EntityRecord.md) | Recognized entities in the document. | [optional] [readonly] 
**id** | **str** | Unique, non-empty document identifier. | [optional] 
**statistics** | [**DocumentStatistics**](DocumentStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.entities_batch_result_item import EntitiesBatchResultItem

# TODO update the JSON string below
json = "{}"
# create an instance of EntitiesBatchResultItem from a JSON string
entities_batch_result_item_instance = EntitiesBatchResultItem.from_json(json)
# print the JSON string representation of the object
print(EntitiesBatchResultItem.to_json())

# convert the object into a dict
entities_batch_result_item_dict = entities_batch_result_item_instance.to_dict()
# create an instance of EntitiesBatchResultItem from a dict
entities_batch_result_item_from_dict = EntitiesBatchResultItem.from_dict(entities_batch_result_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


