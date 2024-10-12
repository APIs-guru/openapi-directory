# StreamInputDataSource

Describes an input data source that contains stream data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests. | [optional] 

## Example

```python
from openapi_client.models.stream_input_data_source import StreamInputDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of StreamInputDataSource from a JSON string
stream_input_data_source_instance = StreamInputDataSource.from_json(json)
# print the JSON string representation of the object
print(StreamInputDataSource.to_json())

# convert the object into a dict
stream_input_data_source_dict = stream_input_data_source_instance.to_dict()
# create an instance of StreamInputDataSource from a dict
stream_input_data_source_from_dict = StreamInputDataSource.from_dict(stream_input_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


