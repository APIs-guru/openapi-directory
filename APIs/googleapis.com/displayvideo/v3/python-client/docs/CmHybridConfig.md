# CmHybridConfig

Settings for advertisers that use both Campaign Manager 360 (CM360) and third-party ad servers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cm_account_id** | **str** | Required. Immutable. Account ID of the CM360 Floodlight configuration linked with the DV360 advertiser. | [optional] 
**cm_advertiser_ids** | **List[str]** | Output only. The set of CM360 Advertiser IDs sharing the CM360 Floodlight configuration. | [optional] [readonly] 
**cm_floodlight_config_id** | **str** | Required. Immutable. ID of the CM360 Floodlight configuration linked with the DV360 advertiser. | [optional] 
**cm_floodlight_linking_authorized** | **bool** | Required. Immutable. By setting this field to &#x60;true&#x60;, you, on behalf of your company, authorize the sharing of information from the given Floodlight configuration to this Display &amp; Video 360 advertiser. | [optional] 
**cm_syncable_site_ids** | **List[str]** | A list of CM360 sites whose placements will be synced to DV360 as creatives. If absent or empty in CreateAdvertiser method, the system will automatically create a CM360 site. Removing sites from this list may cause DV360 creatives synced from CM360 to be deleted. At least one site must be specified. | [optional] 
**dv360_to_cm_cost_reporting_enabled** | **bool** | Whether or not to report DV360 cost to CM360. | [optional] 
**dv360_to_cm_data_sharing_enabled** | **bool** | Whether or not to include DV360 data in CM360 data transfer reports. | [optional] 

## Example

```python
from openapi_client.models.cm_hybrid_config import CmHybridConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CmHybridConfig from a JSON string
cm_hybrid_config_instance = CmHybridConfig.from_json(json)
# print the JSON string representation of the object
print(CmHybridConfig.to_json())

# convert the object into a dict
cm_hybrid_config_dict = cm_hybrid_config_instance.to_dict()
# create an instance of CmHybridConfig from a dict
cm_hybrid_config_from_dict = CmHybridConfig.from_dict(cm_hybrid_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


