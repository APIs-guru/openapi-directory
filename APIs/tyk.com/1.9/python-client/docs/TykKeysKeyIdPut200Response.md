# TykKeysKeyIdPut200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.tyk_keys_key_id_put200_response import TykKeysKeyIdPut200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TykKeysKeyIdPut200Response from a JSON string
tyk_keys_key_id_put200_response_instance = TykKeysKeyIdPut200Response.from_json(json)
# print the JSON string representation of the object
print(TykKeysKeyIdPut200Response.to_json())

# convert the object into a dict
tyk_keys_key_id_put200_response_dict = tyk_keys_key_id_put200_response_instance.to_dict()
# create an instance of TykKeysKeyIdPut200Response from a dict
tyk_keys_key_id_put200_response_from_dict = TykKeysKeyIdPut200Response.from_dict(tyk_keys_key_id_put200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


