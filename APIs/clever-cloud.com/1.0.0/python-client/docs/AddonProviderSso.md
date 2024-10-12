# AddonProviderSso


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**macaroon** | **str** |  | 
**url** | **str** |  | 

## Example

```python
from openapi_client.models.addon_provider_sso import AddonProviderSso

# TODO update the JSON string below
json = "{}"
# create an instance of AddonProviderSso from a JSON string
addon_provider_sso_instance = AddonProviderSso.from_json(json)
# print the JSON string representation of the object
print(AddonProviderSso.to_json())

# convert the object into a dict
addon_provider_sso_dict = addon_provider_sso_instance.to_dict()
# create an instance of AddonProviderSso from a dict
addon_provider_sso_from_dict = AddonProviderSso.from_dict(addon_provider_sso_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


