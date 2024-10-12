# ProbeHttpGetHeaders

Http headers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the header. | 
**value** | **str** | The value of the header. | 

## Example

```python
from openapi_client.models.probe_http_get_headers import ProbeHttpGetHeaders

# TODO update the JSON string below
json = "{}"
# create an instance of ProbeHttpGetHeaders from a JSON string
probe_http_get_headers_instance = ProbeHttpGetHeaders.from_json(json)
# print the JSON string representation of the object
print(ProbeHttpGetHeaders.to_json())

# convert the object into a dict
probe_http_get_headers_dict = probe_http_get_headers_instance.to_dict()
# create an instance of ProbeHttpGetHeaders from a dict
probe_http_get_headers_from_dict = ProbeHttpGetHeaders.from_dict(probe_http_get_headers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


