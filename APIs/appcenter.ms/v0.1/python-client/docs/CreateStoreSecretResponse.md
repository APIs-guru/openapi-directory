# CreateStoreSecretResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret_id** | **str** | the secret id for store secret | [optional] 

## Example

```python
from openapi_client.models.create_store_secret_response import CreateStoreSecretResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateStoreSecretResponse from a JSON string
create_store_secret_response_instance = CreateStoreSecretResponse.from_json(json)
# print the JSON string representation of the object
print(CreateStoreSecretResponse.to_json())

# convert the object into a dict
create_store_secret_response_dict = create_store_secret_response_instance.to_dict()
# create an instance of CreateStoreSecretResponse from a dict
create_store_secret_response_from_dict = CreateStoreSecretResponse.from_dict(create_store_secret_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


