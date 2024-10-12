# DestroySecretVersionRequest

Request message for SecretManagerService.DestroySecretVersion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Optional. Etag of the SecretVersion. The request succeeds if it matches the etag of the currently stored secret version object. If the etag is omitted, the request succeeds. | [optional] 

## Example

```python
from openapi_client.models.destroy_secret_version_request import DestroySecretVersionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DestroySecretVersionRequest from a JSON string
destroy_secret_version_request_instance = DestroySecretVersionRequest.from_json(json)
# print the JSON string representation of the object
print(DestroySecretVersionRequest.to_json())

# convert the object into a dict
destroy_secret_version_request_dict = destroy_secret_version_request_instance.to_dict()
# create an instance of DestroySecretVersionRequest from a dict
destroy_secret_version_request_from_dict = DestroySecretVersionRequest.from_dict(destroy_secret_version_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


