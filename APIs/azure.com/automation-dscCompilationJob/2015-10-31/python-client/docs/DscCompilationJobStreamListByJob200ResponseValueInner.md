# DscCompilationJobStreamListByJob200ResponseValueInner

Definition of the job stream.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Gets or sets the id of the resource. | [optional] 
**properties** | [**DscCompilationJobStreamListByJob200ResponseValueInnerProperties**](DscCompilationJobStreamListByJob200ResponseValueInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.dsc_compilation_job_stream_list_by_job200_response_value_inner import DscCompilationJobStreamListByJob200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of DscCompilationJobStreamListByJob200ResponseValueInner from a JSON string
dsc_compilation_job_stream_list_by_job200_response_value_inner_instance = DscCompilationJobStreamListByJob200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(DscCompilationJobStreamListByJob200ResponseValueInner.to_json())

# convert the object into a dict
dsc_compilation_job_stream_list_by_job200_response_value_inner_dict = dsc_compilation_job_stream_list_by_job200_response_value_inner_instance.to_dict()
# create an instance of DscCompilationJobStreamListByJob200ResponseValueInner from a dict
dsc_compilation_job_stream_list_by_job200_response_value_inner_from_dict = DscCompilationJobStreamListByJob200ResponseValueInner.from_dict(dsc_compilation_job_stream_list_by_job200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


