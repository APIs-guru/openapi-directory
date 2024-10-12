# StreamingEndpoint

The StreamingEndpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StreamingEndpointProperties**](StreamingEndpointProperties.md) |  | [optional] 
**location** | **str** | The Azure Region of the resource. | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified resource ID for the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.streaming_endpoint import StreamingEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingEndpoint from a JSON string
streaming_endpoint_instance = StreamingEndpoint.from_json(json)
# print the JSON string representation of the object
print(StreamingEndpoint.to_json())

# convert the object into a dict
streaming_endpoint_dict = streaming_endpoint_instance.to_dict()
# create an instance of StreamingEndpoint from a dict
streaming_endpoint_from_dict = StreamingEndpoint.from_dict(streaming_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


