# LiaCountrySettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**about** | [**LiaAboutPageSettings**](LiaAboutPageSettings.md) |  | [optional] 
**country** | **str** | Required. CLDR country code (for example, \&quot;US\&quot;). | [optional] 
**hosted_local_storefront_active** | **bool** | The status of the \&quot;Merchant hosted local storefront\&quot; feature. | [optional] 
**inventory** | [**LiaInventorySettings**](LiaInventorySettings.md) |  | [optional] 
**omnichannel_experience** | [**LiaOmnichannelExperience**](LiaOmnichannelExperience.md) |  | [optional] 
**on_display_to_order** | [**LiaOnDisplayToOrderSettings**](LiaOnDisplayToOrderSettings.md) |  | [optional] 
**pos_data_provider** | [**LiaPosDataProvider**](LiaPosDataProvider.md) |  | [optional] 
**store_pickup_active** | **bool** | The status of the \&quot;Store pickup\&quot; feature. | [optional] 

## Example

```python
from openapi_client.models.lia_country_settings import LiaCountrySettings

# TODO update the JSON string below
json = "{}"
# create an instance of LiaCountrySettings from a JSON string
lia_country_settings_instance = LiaCountrySettings.from_json(json)
# print the JSON string representation of the object
print(LiaCountrySettings.to_json())

# convert the object into a dict
lia_country_settings_dict = lia_country_settings_instance.to_dict()
# create an instance of LiaCountrySettings from a dict
lia_country_settings_from_dict = LiaCountrySettings.from_dict(lia_country_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


