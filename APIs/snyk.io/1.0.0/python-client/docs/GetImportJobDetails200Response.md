# GetImportJobDetails200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **str** | the time when an import job was created represented as a [UTC (ISO-8601)](https://tools.ietf.org/html/rfc3339) string | [optional] 
**id** | **str** | A uuid representing the job&#39;s id | [optional] 
**logs** | **List[object]** | all organizations imported by the job | [optional] 
**status** | **str** | a string representing the status of a job.  One of: pending, failed, aborted or complete. | [optional] 

## Example

```python
from openapi_client.models.get_import_job_details200_response import GetImportJobDetails200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetImportJobDetails200Response from a JSON string
get_import_job_details200_response_instance = GetImportJobDetails200Response.from_json(json)
# print the JSON string representation of the object
print(GetImportJobDetails200Response.to_json())

# convert the object into a dict
get_import_job_details200_response_dict = get_import_job_details200_response_instance.to_dict()
# create an instance of GetImportJobDetails200Response from a dict
get_import_job_details200_response_from_dict = GetImportJobDetails200Response.from_dict(get_import_job_details200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


