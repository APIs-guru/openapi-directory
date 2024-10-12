# StreamingJobPropertiesOutputsInnerPropertiesDatasource

Describes the data source that output will be written to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests. | [optional] 

## Example

```python
from openapi_client.models.streaming_job_properties_outputs_inner_properties_datasource import StreamingJobPropertiesOutputsInnerPropertiesDatasource

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingJobPropertiesOutputsInnerPropertiesDatasource from a JSON string
streaming_job_properties_outputs_inner_properties_datasource_instance = StreamingJobPropertiesOutputsInnerPropertiesDatasource.from_json(json)
# print the JSON string representation of the object
print(StreamingJobPropertiesOutputsInnerPropertiesDatasource.to_json())

# convert the object into a dict
streaming_job_properties_outputs_inner_properties_datasource_dict = streaming_job_properties_outputs_inner_properties_datasource_instance.to_dict()
# create an instance of StreamingJobPropertiesOutputsInnerPropertiesDatasource from a dict
streaming_job_properties_outputs_inner_properties_datasource_from_dict = StreamingJobPropertiesOutputsInnerPropertiesDatasource.from_dict(streaming_job_properties_outputs_inner_properties_datasource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


