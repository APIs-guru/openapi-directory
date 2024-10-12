# AccessDeniedPageSettings

Custom content configuration for access denied page. IAP allows customers to define a custom URI to use as the error page when access is denied to users. If IAP prevents access to this page, the default IAP error page will be displayed instead.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_denied_page_uri** | **str** | The URI to be redirected to when access is denied. | [optional] 
**generate_troubleshooting_uri** | **bool** | Whether to generate a troubleshooting URL on access denied events to this application. | [optional] 
**remediation_token_generation_enabled** | **bool** | Whether to generate remediation token on access denied events to this application. | [optional] 

## Example

```python
from openapi_client.models.access_denied_page_settings import AccessDeniedPageSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AccessDeniedPageSettings from a JSON string
access_denied_page_settings_instance = AccessDeniedPageSettings.from_json(json)
# print the JSON string representation of the object
print(AccessDeniedPageSettings.to_json())

# convert the object into a dict
access_denied_page_settings_dict = access_denied_page_settings_instance.to_dict()
# create an instance of AccessDeniedPageSettings from a dict
access_denied_page_settings_from_dict = AccessDeniedPageSettings.from_dict(access_denied_page_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


