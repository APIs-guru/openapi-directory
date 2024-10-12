# EndpointHeadersIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headers** | **Dict[str, str]** |  | 

## Example

```python
from openapi_client.models.endpoint_headers_in import EndpointHeadersIn

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointHeadersIn from a JSON string
endpoint_headers_in_instance = EndpointHeadersIn.from_json(json)
# print the JSON string representation of the object
print(EndpointHeadersIn.to_json())

# convert the object into a dict
endpoint_headers_in_dict = endpoint_headers_in_instance.to_dict()
# create an instance of EndpointHeadersIn from a dict
endpoint_headers_in_from_dict = EndpointHeadersIn.from_dict(endpoint_headers_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


