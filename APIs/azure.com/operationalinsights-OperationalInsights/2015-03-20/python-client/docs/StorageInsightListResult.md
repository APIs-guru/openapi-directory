# StorageInsightListResult

The list storage insights operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** | The link (url) to the next page of results. | [optional] 
**value** | [**List[StorageInsight]**](StorageInsight.md) | A list of storage insight items. | [optional] 

## Example

```python
from openapi_client.models.storage_insight_list_result import StorageInsightListResult

# TODO update the JSON string below
json = "{}"
# create an instance of StorageInsightListResult from a JSON string
storage_insight_list_result_instance = StorageInsightListResult.from_json(json)
# print the JSON string representation of the object
print(StorageInsightListResult.to_json())

# convert the object into a dict
storage_insight_list_result_dict = storage_insight_list_result_instance.to_dict()
# create an instance of StorageInsightListResult from a dict
storage_insight_list_result_from_dict = StorageInsightListResult.from_dict(storage_insight_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


