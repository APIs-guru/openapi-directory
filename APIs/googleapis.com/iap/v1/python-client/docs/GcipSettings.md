# GcipSettings

Allows customers to configure tenant_id for GCIP instance per-app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**login_page_uri** | **str** | Login page URI associated with the GCIP tenants. Typically, all resources within the same project share the same login page, though it could be overridden at the sub resource level. | [optional] 
**tenant_ids** | **List[str]** | GCIP tenant ids that are linked to the IAP resource. tenant_ids could be a string beginning with a number character to indicate authenticating with GCIP tenant flow, or in the format of _ to indicate authenticating with GCIP agent flow. If agent flow is used, tenant_ids should only contain one single element, while for tenant flow, tenant_ids can contain multiple elements. | [optional] 

## Example

```python
from openapi_client.models.gcip_settings import GcipSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GcipSettings from a JSON string
gcip_settings_instance = GcipSettings.from_json(json)
# print the JSON string representation of the object
print(GcipSettings.to_json())

# convert the object into a dict
gcip_settings_dict = gcip_settings_instance.to_dict()
# create an instance of GcipSettings from a dict
gcip_settings_from_dict = GcipSettings.from_dict(gcip_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


