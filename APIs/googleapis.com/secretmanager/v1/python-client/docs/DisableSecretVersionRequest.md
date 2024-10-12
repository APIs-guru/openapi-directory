# DisableSecretVersionRequest

Request message for SecretManagerService.DisableSecretVersion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Optional. Etag of the SecretVersion. The request succeeds if it matches the etag of the currently stored secret version object. If the etag is omitted, the request succeeds. | [optional] 

## Example

```python
from openapi_client.models.disable_secret_version_request import DisableSecretVersionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DisableSecretVersionRequest from a JSON string
disable_secret_version_request_instance = DisableSecretVersionRequest.from_json(json)
# print the JSON string representation of the object
print(DisableSecretVersionRequest.to_json())

# convert the object into a dict
disable_secret_version_request_dict = disable_secret_version_request_instance.to_dict()
# create an instance of DisableSecretVersionRequest from a dict
disable_secret_version_request_from_dict = DisableSecretVersionRequest.from_dict(disable_secret_version_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


