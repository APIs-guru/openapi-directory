# PartnerAdServerConfig

Ad server related settings of a partner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**measurement_config** | [**MeasurementConfig**](MeasurementConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.partner_ad_server_config import PartnerAdServerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PartnerAdServerConfig from a JSON string
partner_ad_server_config_instance = PartnerAdServerConfig.from_json(json)
# print the JSON string representation of the object
print(PartnerAdServerConfig.to_json())

# convert the object into a dict
partner_ad_server_config_dict = partner_ad_server_config_instance.to_dict()
# create an instance of PartnerAdServerConfig from a dict
partner_ad_server_config_from_dict = PartnerAdServerConfig.from_dict(partner_ad_server_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


