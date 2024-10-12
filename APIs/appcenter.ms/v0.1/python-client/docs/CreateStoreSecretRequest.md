# CreateStoreSecretRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret_json** | [**StoresCreateRequestIntuneDetailsSecretJson**](StoresCreateRequestIntuneDetailsSecretJson.md) |  | [optional] 
**tenant_id** | **str** | the tenant id for user | [optional] 

## Example

```python
from openapi_client.models.create_store_secret_request import CreateStoreSecretRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateStoreSecretRequest from a JSON string
create_store_secret_request_instance = CreateStoreSecretRequest.from_json(json)
# print the JSON string representation of the object
print(CreateStoreSecretRequest.to_json())

# convert the object into a dict
create_store_secret_request_dict = create_store_secret_request_instance.to_dict()
# create an instance of CreateStoreSecretRequest from a dict
create_store_secret_request_from_dict = CreateStoreSecretRequest.from_dict(create_store_secret_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


