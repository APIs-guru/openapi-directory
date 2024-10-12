# ShowTranscoderStats200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transcoder** | [**ShmMetrics**](ShmMetrics.md) |  | 

## Example

```python
from openapi_client.models.show_transcoder_stats200_response import ShowTranscoderStats200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ShowTranscoderStats200Response from a JSON string
show_transcoder_stats200_response_instance = ShowTranscoderStats200Response.from_json(json)
# print the JSON string representation of the object
print(ShowTranscoderStats200Response.to_json())

# convert the object into a dict
show_transcoder_stats200_response_dict = show_transcoder_stats200_response_instance.to_dict()
# create an instance of ShowTranscoderStats200Response from a dict
show_transcoder_stats200_response_from_dict = ShowTranscoderStats200Response.from_dict(show_transcoder_stats200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


