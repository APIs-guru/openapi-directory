# DscCompilationJobStreamListByJob200Response

The response model for the list job stream operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the next link. | [optional] 
**value** | [**List[DscCompilationJobStreamListByJob200ResponseValueInner]**](DscCompilationJobStreamListByJob200ResponseValueInner.md) | A list of job streams. | [optional] 

## Example

```python
from openapi_client.models.dsc_compilation_job_stream_list_by_job200_response import DscCompilationJobStreamListByJob200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DscCompilationJobStreamListByJob200Response from a JSON string
dsc_compilation_job_stream_list_by_job200_response_instance = DscCompilationJobStreamListByJob200Response.from_json(json)
# print the JSON string representation of the object
print(DscCompilationJobStreamListByJob200Response.to_json())

# convert the object into a dict
dsc_compilation_job_stream_list_by_job200_response_dict = dsc_compilation_job_stream_list_by_job200_response_instance.to_dict()
# create an instance of DscCompilationJobStreamListByJob200Response from a dict
dsc_compilation_job_stream_list_by_job200_response_from_dict = DscCompilationJobStreamListByJob200Response.from_dict(dsc_compilation_job_stream_list_by_job200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


