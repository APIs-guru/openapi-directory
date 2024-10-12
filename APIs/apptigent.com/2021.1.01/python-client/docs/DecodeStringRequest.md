# DecodeStringRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** | Encoded string variable or text value | 

## Example

```python
from openapi_client.models.decode_string_request import DecodeStringRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DecodeStringRequest from a JSON string
decode_string_request_instance = DecodeStringRequest.from_json(json)
# print the JSON string representation of the object
print(DecodeStringRequest.to_json())

# convert the object into a dict
decode_string_request_dict = decode_string_request_instance.to_dict()
# create an instance of DecodeStringRequest from a dict
decode_string_request_from_dict = DecodeStringRequest.from_dict(decode_string_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


