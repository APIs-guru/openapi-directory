# AccessSecretVersionResponse

Response message for SecretManagerService.AccessSecretVersion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The resource name of the SecretVersion in the format &#x60;projects/*/secrets/*/versions/*&#x60;. | [optional] 
**payload** | [**SecretPayload**](SecretPayload.md) |  | [optional] 

## Example

```python
from openapi_client.models.access_secret_version_response import AccessSecretVersionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccessSecretVersionResponse from a JSON string
access_secret_version_response_instance = AccessSecretVersionResponse.from_json(json)
# print the JSON string representation of the object
print(AccessSecretVersionResponse.to_json())

# convert the object into a dict
access_secret_version_response_dict = access_secret_version_response_instance.to_dict()
# create an instance of AccessSecretVersionResponse from a dict
access_secret_version_response_from_dict = AccessSecretVersionResponse.from_dict(access_secret_version_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


