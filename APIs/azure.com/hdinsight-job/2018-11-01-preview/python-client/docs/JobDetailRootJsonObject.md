# JobDetailRootJsonObject

The object containing the job details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **object** | The callback URL, if any. | [optional] 
**completed** | **str** | The string representing completed status, for example &#39;done&#39;. | [optional] 
**exit_value** | **int** | The job&#39;s exit value. | [optional] 
**id** | **str** | The job ID. | [optional] 
**msg** | **object** | The message returned. | [optional] 
**parent_id** | **str** | The parent job ID. | [optional] 
**percent_complete** | **str** | The job completion percentage, for example &#39;75% complete&#39;. | [optional] 
**profile** | [**Profile**](Profile.md) |  | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 
**user** | **str** | The user name of the job creator. | [optional] 
**userargs** | [**Userargs**](Userargs.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_detail_root_json_object import JobDetailRootJsonObject

# TODO update the JSON string below
json = "{}"
# create an instance of JobDetailRootJsonObject from a JSON string
job_detail_root_json_object_instance = JobDetailRootJsonObject.from_json(json)
# print the JSON string representation of the object
print(JobDetailRootJsonObject.to_json())

# convert the object into a dict
job_detail_root_json_object_dict = job_detail_root_json_object_instance.to_dict()
# create an instance of JobDetailRootJsonObject from a dict
job_detail_root_json_object_from_dict = JobDetailRootJsonObject.from_dict(job_detail_root_json_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


