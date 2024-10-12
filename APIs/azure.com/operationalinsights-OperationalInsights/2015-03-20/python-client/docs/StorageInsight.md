# StorageInsight

The top level storage insight resource container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**e_tag** | **str** | The ETag of the storage insight. | [optional] 
**properties** | [**StorageInsightProperties**](StorageInsightProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_insight import StorageInsight

# TODO update the JSON string below
json = "{}"
# create an instance of StorageInsight from a JSON string
storage_insight_instance = StorageInsight.from_json(json)
# print the JSON string representation of the object
print(StorageInsight.to_json())

# convert the object into a dict
storage_insight_dict = storage_insight_instance.to_dict()
# create an instance of StorageInsight from a dict
storage_insight_from_dict = StorageInsight.from_dict(storage_insight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


