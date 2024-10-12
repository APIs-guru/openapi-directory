# DscCompilationJobStreamListByJob200ResponseValueInnerProperties

Definition of the job stream.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_stream_id** | **str** | Gets or sets the id of the job stream. | [optional] 
**stream_text** | **str** | Gets or sets the stream text. | [optional] 
**stream_type** | **str** | Gets or sets the stream type. | [optional] 
**summary** | **str** | Gets or sets the summary. | [optional] 
**time** | **datetime** | Gets or sets the creation time of the job. | [optional] 
**value** | **Dict[str, object]** | Gets or sets the values of the job stream. | [optional] 

## Example

```python
from openapi_client.models.dsc_compilation_job_stream_list_by_job200_response_value_inner_properties import DscCompilationJobStreamListByJob200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DscCompilationJobStreamListByJob200ResponseValueInnerProperties from a JSON string
dsc_compilation_job_stream_list_by_job200_response_value_inner_properties_instance = DscCompilationJobStreamListByJob200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(DscCompilationJobStreamListByJob200ResponseValueInnerProperties.to_json())

# convert the object into a dict
dsc_compilation_job_stream_list_by_job200_response_value_inner_properties_dict = dsc_compilation_job_stream_list_by_job200_response_value_inner_properties_instance.to_dict()
# create an instance of DscCompilationJobStreamListByJob200ResponseValueInnerProperties from a dict
dsc_compilation_job_stream_list_by_job200_response_value_inner_properties_from_dict = DscCompilationJobStreamListByJob200ResponseValueInnerProperties.from_dict(dsc_compilation_job_stream_list_by_job200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


