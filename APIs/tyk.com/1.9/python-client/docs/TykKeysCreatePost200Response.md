# TykKeysCreatePost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.tyk_keys_create_post200_response import TykKeysCreatePost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TykKeysCreatePost200Response from a JSON string
tyk_keys_create_post200_response_instance = TykKeysCreatePost200Response.from_json(json)
# print the JSON string representation of the object
print(TykKeysCreatePost200Response.to_json())

# convert the object into a dict
tyk_keys_create_post200_response_dict = tyk_keys_create_post200_response_instance.to_dict()
# create an instance of TykKeysCreatePost200Response from a dict
tyk_keys_create_post200_response_from_dict = TykKeysCreatePost200Response.from_dict(tyk_keys_create_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


