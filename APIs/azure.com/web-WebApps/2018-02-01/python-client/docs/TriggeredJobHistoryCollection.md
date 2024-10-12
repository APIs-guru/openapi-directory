# TriggeredJobHistoryCollection

Collection of Kudu continuous web job information elements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[TriggeredJobHistory]**](TriggeredJobHistory.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.triggered_job_history_collection import TriggeredJobHistoryCollection

# TODO update the JSON string below
json = "{}"
# create an instance of TriggeredJobHistoryCollection from a JSON string
triggered_job_history_collection_instance = TriggeredJobHistoryCollection.from_json(json)
# print the JSON string representation of the object
print(TriggeredJobHistoryCollection.to_json())

# convert the object into a dict
triggered_job_history_collection_dict = triggered_job_history_collection_instance.to_dict()
# create an instance of TriggeredJobHistoryCollection from a dict
triggered_job_history_collection_from_dict = TriggeredJobHistoryCollection.from_dict(triggered_job_history_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


