# CloneAnIntegrationWithSettingsAndCredentialsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_org_public_id** | **str** | The organization public ID. The &#x60;API_KEY&#x60; must have access to this organization. | 

## Example

```python
from openapi_client.models.clone_an_integration_with_settings_and_credentials_request import CloneAnIntegrationWithSettingsAndCredentialsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CloneAnIntegrationWithSettingsAndCredentialsRequest from a JSON string
clone_an_integration_with_settings_and_credentials_request_instance = CloneAnIntegrationWithSettingsAndCredentialsRequest.from_json(json)
# print the JSON string representation of the object
print(CloneAnIntegrationWithSettingsAndCredentialsRequest.to_json())

# convert the object into a dict
clone_an_integration_with_settings_and_credentials_request_dict = clone_an_integration_with_settings_and_credentials_request_instance.to_dict()
# create an instance of CloneAnIntegrationWithSettingsAndCredentialsRequest from a dict
clone_an_integration_with_settings_and_credentials_request_from_dict = CloneAnIntegrationWithSettingsAndCredentialsRequest.from_dict(clone_an_integration_with_settings_and_credentials_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


