# StreamInputProperties

The properties that are associated with an input containing stream data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datasource** | [**StreamInputDataSource**](StreamInputDataSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.stream_input_properties import StreamInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StreamInputProperties from a JSON string
stream_input_properties_instance = StreamInputProperties.from_json(json)
# print the JSON string representation of the object
print(StreamInputProperties.to_json())

# convert the object into a dict
stream_input_properties_dict = stream_input_properties_instance.to_dict()
# create an instance of StreamInputProperties from a dict
stream_input_properties_from_dict = StreamInputProperties.from_dict(stream_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


