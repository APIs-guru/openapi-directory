# TriggeredWebJobCollection

Collection of Kudu continuous web job information elements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[TriggeredWebJob]**](TriggeredWebJob.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.triggered_web_job_collection import TriggeredWebJobCollection

# TODO update the JSON string below
json = "{}"
# create an instance of TriggeredWebJobCollection from a JSON string
triggered_web_job_collection_instance = TriggeredWebJobCollection.from_json(json)
# print the JSON string representation of the object
print(TriggeredWebJobCollection.to_json())

# convert the object into a dict
triggered_web_job_collection_dict = triggered_web_job_collection_instance.to_dict()
# create an instance of TriggeredWebJobCollection from a dict
triggered_web_job_collection_from_dict = TriggeredWebJobCollection.from_dict(triggered_web_job_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


