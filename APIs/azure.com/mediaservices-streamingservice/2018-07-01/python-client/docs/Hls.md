# Hls

The HLS configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fragments_per_ts_segment** | **int** | The amount of fragments per HTTP Live Streaming (HLS) segment. | [optional] 

## Example

```python
from openapi_client.models.hls import Hls

# TODO update the JSON string below
json = "{}"
# create an instance of Hls from a JSON string
hls_instance = Hls.from_json(json)
# print the JSON string representation of the object
print(Hls.to_json())

# convert the object into a dict
hls_dict = hls_instance.to_dict()
# create an instance of Hls from a dict
hls_from_dict = Hls.from_dict(hls_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


