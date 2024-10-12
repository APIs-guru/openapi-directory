# V2GetKeyStringResponse

Response message for `GetKeyString` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_string** | **str** | An encrypted and signed value of the key. | [optional] 

## Example

```python
from openapi_client.models.v2_get_key_string_response import V2GetKeyStringResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V2GetKeyStringResponse from a JSON string
v2_get_key_string_response_instance = V2GetKeyStringResponse.from_json(json)
# print the JSON string representation of the object
print(V2GetKeyStringResponse.to_json())

# convert the object into a dict
v2_get_key_string_response_dict = v2_get_key_string_response_instance.to_dict()
# create an instance of V2GetKeyStringResponse from a dict
v2_get_key_string_response_from_dict = V2GetKeyStringResponse.from_dict(v2_get_key_string_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


