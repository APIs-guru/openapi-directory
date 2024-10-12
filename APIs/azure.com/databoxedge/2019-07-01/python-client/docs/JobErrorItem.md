# JobErrorItem

The job error items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The code intended for programmatic access. | [optional] [readonly] 
**message** | **str** | The message that describes the error in detail. | [optional] [readonly] 
**recommendations** | **List[str]** | The recommended actions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_error_item import JobErrorItem

# TODO update the JSON string below
json = "{}"
# create an instance of JobErrorItem from a JSON string
job_error_item_instance = JobErrorItem.from_json(json)
# print the JSON string representation of the object
print(JobErrorItem.to_json())

# convert the object into a dict
job_error_item_dict = job_error_item_instance.to_dict()
# create an instance of JobErrorItem from a dict
job_error_item_from_dict = JobErrorItem.from_dict(job_error_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


