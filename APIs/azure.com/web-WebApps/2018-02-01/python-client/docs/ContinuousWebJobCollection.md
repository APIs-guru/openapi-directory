# ContinuousWebJobCollection

Collection of Kudu continuous web job information elements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[ContinuousWebJob]**](ContinuousWebJob.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.continuous_web_job_collection import ContinuousWebJobCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ContinuousWebJobCollection from a JSON string
continuous_web_job_collection_instance = ContinuousWebJobCollection.from_json(json)
# print the JSON string representation of the object
print(ContinuousWebJobCollection.to_json())

# convert the object into a dict
continuous_web_job_collection_dict = continuous_web_job_collection_instance.to_dict()
# create an instance of ContinuousWebJobCollection from a dict
continuous_web_job_collection_from_dict = ContinuousWebJobCollection.from_dict(continuous_web_job_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


