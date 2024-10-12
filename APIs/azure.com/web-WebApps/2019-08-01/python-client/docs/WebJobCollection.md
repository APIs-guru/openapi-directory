# WebJobCollection

Collection of Kudu web job information elements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[WebJob]**](WebJob.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.web_job_collection import WebJobCollection

# TODO update the JSON string below
json = "{}"
# create an instance of WebJobCollection from a JSON string
web_job_collection_instance = WebJobCollection.from_json(json)
# print the JSON string representation of the object
print(WebJobCollection.to_json())

# convert the object into a dict
web_job_collection_dict = web_job_collection_instance.to_dict()
# create an instance of WebJobCollection from a dict
web_job_collection_from_dict = WebJobCollection.from_dict(web_job_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


