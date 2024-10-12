# IdentityServiceGoogleConfig

Configuration for the Google Plugin Auth flow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable** | **bool** | Disable automatic configuration of Google Plugin on supported platforms. | [optional] 

## Example

```python
from openapi_client.models.identity_service_google_config import IdentityServiceGoogleConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityServiceGoogleConfig from a JSON string
identity_service_google_config_instance = IdentityServiceGoogleConfig.from_json(json)
# print the JSON string representation of the object
print(IdentityServiceGoogleConfig.to_json())

# convert the object into a dict
identity_service_google_config_dict = identity_service_google_config_instance.to_dict()
# create an instance of IdentityServiceGoogleConfig from a dict
identity_service_google_config_from_dict = IdentityServiceGoogleConfig.from_dict(identity_service_google_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


