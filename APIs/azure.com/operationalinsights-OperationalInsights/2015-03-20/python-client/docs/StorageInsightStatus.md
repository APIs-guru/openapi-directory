# StorageInsightStatus

The status of the storage insight.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the state of the storage insight. | [optional] 
**state** | **str** | The state of the storage insight connection to the workspace | 

## Example

```python
from openapi_client.models.storage_insight_status import StorageInsightStatus

# TODO update the JSON string below
json = "{}"
# create an instance of StorageInsightStatus from a JSON string
storage_insight_status_instance = StorageInsightStatus.from_json(json)
# print the JSON string representation of the object
print(StorageInsightStatus.to_json())

# convert the object into a dict
storage_insight_status_dict = storage_insight_status_instance.to_dict()
# create an instance of StorageInsightStatus from a dict
storage_insight_status_from_dict = StorageInsightStatus.from_dict(storage_insight_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


