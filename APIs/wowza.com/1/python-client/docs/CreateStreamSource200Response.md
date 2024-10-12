# CreateStreamSource200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_source** | [**StreamSource**](StreamSource.md) |  | 

## Example

```python
from openapi_client.models.create_stream_source200_response import CreateStreamSource200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateStreamSource200Response from a JSON string
create_stream_source200_response_instance = CreateStreamSource200Response.from_json(json)
# print the JSON string representation of the object
print(CreateStreamSource200Response.to_json())

# convert the object into a dict
create_stream_source200_response_dict = create_stream_source200_response_instance.to_dict()
# create an instance of CreateStreamSource200Response from a dict
create_stream_source200_response_from_dict = CreateStreamSource200Response.from_dict(create_stream_source200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


