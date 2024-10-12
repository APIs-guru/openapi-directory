# UrlDecodeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** | Encoded string variable or text value | 

## Example

```python
from openapi_client.models.url_decode_request import UrlDecodeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UrlDecodeRequest from a JSON string
url_decode_request_instance = UrlDecodeRequest.from_json(json)
# print the JSON string representation of the object
print(UrlDecodeRequest.to_json())

# convert the object into a dict
url_decode_request_dict = url_decode_request_instance.to_dict()
# create an instance of UrlDecodeRequest from a dict
url_decode_request_from_dict = UrlDecodeRequest.from_dict(url_decode_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


