# EnableSecretVersionRequest

Request message for SecretManagerService.EnableSecretVersion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Optional. Etag of the SecretVersion. The request succeeds if it matches the etag of the currently stored secret version object. If the etag is omitted, the request succeeds. | [optional] 

## Example

```python
from openapi_client.models.enable_secret_version_request import EnableSecretVersionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EnableSecretVersionRequest from a JSON string
enable_secret_version_request_instance = EnableSecretVersionRequest.from_json(json)
# print the JSON string representation of the object
print(EnableSecretVersionRequest.to_json())

# convert the object into a dict
enable_secret_version_request_dict = enable_secret_version_request_instance.to_dict()
# create an instance of EnableSecretVersionRequest from a dict
enable_secret_version_request_from_dict = EnableSecretVersionRequest.from_dict(enable_secret_version_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


