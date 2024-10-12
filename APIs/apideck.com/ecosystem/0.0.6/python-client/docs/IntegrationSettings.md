# IntegrationSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**albacross_id** | **str** |  | [optional] 
**automate_enabled** | **bool** |  | [optional] 
**blendr_enabled** | **bool** |  | [optional] 
**combidesk_enabled** | **bool** |  | [optional] 
**crisp_id** | **str** |  | [optional] 
**drift_id** | **str** |  | [optional] 
**google_analytics_id** | **str** |  | [optional] 
**google_tag_manager_id** | **str** |  | [optional] 
**heap_id** | **str** |  | [optional] 
**hubspot_portal_id** | **str** |  | [optional] 
**integromat_enabled** | **bool** |  | [optional] 
**intercom_app_id** | **str** |  | [optional] 
**iubenda_cookie_policy_id** | **str** |  | [optional] 
**iubenda_site_id** | **str** |  | [optional] 
**journy_io_domain** | **str** |  | [optional] 
**journy_io_id** | **str** |  | [optional] 
**livechat_id** | **str** |  | [optional] 
**metomic_id** | **str** |  | [optional] 
**microsoft_flow_enabled** | **bool** |  | [optional] 
**microsoft_flow_id** | **str** |  | [optional] 
**onetrust_id** | **str** |  | [optional] 
**piesync_enabled** | **bool** |  | [optional] 
**segment_enabled** | **bool** |  | [optional] 
**segment_id** | **str** |  | [optional] 
**tray_io_enabled** | **bool** |  | [optional] 
**zapier_beta_link** | **str** |  | [optional] 
**zapier_enabled** | **bool** |  | [optional] 
**zapier_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.integration_settings import IntegrationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationSettings from a JSON string
integration_settings_instance = IntegrationSettings.from_json(json)
# print the JSON string representation of the object
print(IntegrationSettings.to_json())

# convert the object into a dict
integration_settings_dict = integration_settings_instance.to_dict()
# create an instance of IntegrationSettings from a dict
integration_settings_from_dict = IntegrationSettings.from_dict(integration_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


