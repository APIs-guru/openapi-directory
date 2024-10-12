# GetJSONWebKeysResponse

GetJSONWebKeysResponse is a valid JSON Web Key Set as specififed in rfc 7517

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_header** | [**HttpCacheControlResponseHeader**](HttpCacheControlResponseHeader.md) |  | [optional] 
**keys** | [**List[Jwk]**](Jwk.md) | The public component of the keys used by the cluster to sign token requests. | [optional] 

## Example

```python
from openapi_client.models.get_json_web_keys_response import GetJSONWebKeysResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetJSONWebKeysResponse from a JSON string
get_json_web_keys_response_instance = GetJSONWebKeysResponse.from_json(json)
# print the JSON string representation of the object
print(GetJSONWebKeysResponse.to_json())

# convert the object into a dict
get_json_web_keys_response_dict = get_json_web_keys_response_instance.to_dict()
# create an instance of GetJSONWebKeysResponse from a dict
get_json_web_keys_response_from_dict = GetJSONWebKeysResponse.from_dict(get_json_web_keys_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


