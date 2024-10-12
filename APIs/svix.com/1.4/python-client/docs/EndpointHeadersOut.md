# EndpointHeadersOut

The value of the headers is returned in the `headers` field.  Sensitive headers that have been redacted are returned in the sensitive field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headers** | **Dict[str, str]** |  | 
**sensitive** | **List[str]** |  | 

## Example

```python
from openapi_client.models.endpoint_headers_out import EndpointHeadersOut

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointHeadersOut from a JSON string
endpoint_headers_out_instance = EndpointHeadersOut.from_json(json)
# print the JSON string representation of the object
print(EndpointHeadersOut.to_json())

# convert the object into a dict
endpoint_headers_out_dict = endpoint_headers_out_instance.to_dict()
# create an instance of EndpointHeadersOut from a dict
endpoint_headers_out_from_dict = EndpointHeadersOut.from_dict(endpoint_headers_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


