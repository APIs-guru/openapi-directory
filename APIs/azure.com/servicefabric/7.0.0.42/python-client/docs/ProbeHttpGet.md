# ProbeHttpGet

Http probe for the container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | Host IP to connect to. | [optional] 
**http_headers** | [**List[ProbeHttpGetHeaders]**](ProbeHttpGetHeaders.md) | Headers to set in the request. | [optional] 
**path** | **str** | Path to access on the HTTP request. | [optional] 
**port** | **int** | Port to access for probe. | 
**scheme** | **str** | Scheme for the http probe. Can be Http or Https. | [optional] 

## Example

```python
from openapi_client.models.probe_http_get import ProbeHttpGet

# TODO update the JSON string below
json = "{}"
# create an instance of ProbeHttpGet from a JSON string
probe_http_get_instance = ProbeHttpGet.from_json(json)
# print the JSON string representation of the object
print(ProbeHttpGet.to_json())

# convert the object into a dict
probe_http_get_dict = probe_http_get_instance.to_dict()
# create an instance of ProbeHttpGet from a dict
probe_http_get_from_dict = ProbeHttpGet.from_dict(probe_http_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


