# PartnerGeneralConfig

General settings of a partner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | Immutable. Partner&#39;s currency in ISO 4217 format. | [optional] 
**time_zone** | **str** | Immutable. The standard TZ database name of the partner&#39;s time zone. For example, &#x60;America/New_York&#x60;. See more at: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones | [optional] 

## Example

```python
from openapi_client.models.partner_general_config import PartnerGeneralConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PartnerGeneralConfig from a JSON string
partner_general_config_instance = PartnerGeneralConfig.from_json(json)
# print the JSON string representation of the object
print(PartnerGeneralConfig.to_json())

# convert the object into a dict
partner_general_config_dict = partner_general_config_instance.to_dict()
# create an instance of PartnerGeneralConfig from a dict
partner_general_config_from_dict = PartnerGeneralConfig.from_dict(partner_general_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


