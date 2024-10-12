# StoreSecretResponse

StoreSecretResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Store id | [optional] 
**name** | **str** | Store Name | [optional] 
**secret** | **str** | Secret Json | [optional] 
**tenant_id** | **str** | Tenant Id for Intune | [optional] 
**type** | **str** | Store Type | [optional] 

## Example

```python
from openapi_client.models.store_secret_response import StoreSecretResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StoreSecretResponse from a JSON string
store_secret_response_instance = StoreSecretResponse.from_json(json)
# print the JSON string representation of the object
print(StoreSecretResponse.to_json())

# convert the object into a dict
store_secret_response_dict = store_secret_response_instance.to_dict()
# create an instance of StoreSecretResponse from a dict
store_secret_response_from_dict = StoreSecretResponse.from_dict(store_secret_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


