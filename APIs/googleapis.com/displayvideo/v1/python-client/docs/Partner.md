# Partner

A single partner in Display & Video 360 (DV360).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_server_config** | [**PartnerAdServerConfig**](PartnerAdServerConfig.md) |  | [optional] 
**data_access_config** | [**PartnerDataAccessConfig**](PartnerDataAccessConfig.md) |  | [optional] 
**display_name** | **str** | The display name of the partner. Must be UTF-8 encoded with a maximum size of 240 bytes. | [optional] 
**entity_status** | **str** | Output only. The status of the partner. | [optional] [readonly] 
**exchange_config** | [**ExchangeConfig**](ExchangeConfig.md) |  | [optional] 
**general_config** | [**PartnerGeneralConfig**](PartnerGeneralConfig.md) |  | [optional] 
**name** | **str** | Output only. The resource name of the partner. | [optional] [readonly] 
**partner_id** | **str** | Output only. The unique ID of the partner. Assigned by the system. | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp when the partner was last updated. Assigned by the system. | [optional] [readonly] 

## Example

```python
from openapi_client.models.partner import Partner

# TODO update the JSON string below
json = "{}"
# create an instance of Partner from a JSON string
partner_instance = Partner.from_json(json)
# print the JSON string representation of the object
print(Partner.to_json())

# convert the object into a dict
partner_dict = partner_instance.to_dict()
# create an instance of Partner from a dict
partner_from_dict = Partner.from_dict(partner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


