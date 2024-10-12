# AddSecretVersionRequest

Request message for SecretManagerService.AddSecretVersion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payload** | [**SecretPayload**](SecretPayload.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_secret_version_request import AddSecretVersionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddSecretVersionRequest from a JSON string
add_secret_version_request_instance = AddSecretVersionRequest.from_json(json)
# print the JSON string representation of the object
print(AddSecretVersionRequest.to_json())

# convert the object into a dict
add_secret_version_request_dict = add_secret_version_request_instance.to_dict()
# create an instance of AddSecretVersionRequest from a dict
add_secret_version_request_from_dict = AddSecretVersionRequest.from_dict(add_secret_version_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


