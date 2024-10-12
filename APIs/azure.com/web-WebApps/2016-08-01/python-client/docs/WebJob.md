# WebJob

Web Job Information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | WebJob resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_job import WebJob

# TODO update the JSON string below
json = "{}"
# create an instance of WebJob from a JSON string
web_job_instance = WebJob.from_json(json)
# print the JSON string representation of the object
print(WebJob.to_json())

# convert the object into a dict
web_job_dict = web_job_instance.to_dict()
# create an instance of WebJob from a dict
web_job_from_dict = WebJob.from_dict(web_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


