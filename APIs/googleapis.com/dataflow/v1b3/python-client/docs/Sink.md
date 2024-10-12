# Sink

A sink that records can be encoded and written to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**codec** | **Dict[str, object]** | The codec to use to encode data written to the sink. | [optional] 
**spec** | **Dict[str, object]** | The sink to write to, plus its parameters. | [optional] 

## Example

```python
from openapi_client.models.sink import Sink

# TODO update the JSON string below
json = "{}"
# create an instance of Sink from a JSON string
sink_instance = Sink.from_json(json)
# print the JSON string representation of the object
print(Sink.to_json())

# convert the object into a dict
sink_dict = sink_instance.to_dict()
# create an instance of Sink from a dict
sink_from_dict = Sink.from_dict(sink_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


