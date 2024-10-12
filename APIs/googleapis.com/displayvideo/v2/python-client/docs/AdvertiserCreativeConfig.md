# AdvertiserCreativeConfig

Creatives related settings of an advertiser.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_creative_enabled** | **bool** | Whether or not the advertiser is enabled for dynamic creatives. | [optional] 
**ias_client_id** | **str** | An ID for configuring campaign monitoring provided by Integral Ad Service (IAS). The DV360 system will append an IAS \&quot;Campaign Monitor\&quot; tag containing this ID to the creative tag. | [optional] 
**oba_compliance_disabled** | **bool** | Whether or not to disable Google&#39;s About this Ad feature that adds badging (to identify the content as an ad) and transparency information (on interaction with About this Ad) to your ads for Online Behavioral Advertising (OBA) and regulatory requirements. About this Ad gives users greater control over the ads they see and helps you explain why they&#39;re seeing your ad. [Learn more](//support.google.com/displayvideo/answer/14315795). If you choose to set this field to &#x60;true&#x60;, note that ads served through Display &amp; Video 360 must comply to the following: * Be Online Behavioral Advertising (OBA) compliant, as per your contract with Google Marketing Platform. * In the European Economic Area (EEA), include transparency information and a mechanism for users to report illegal content in ads. If using an alternative ad badging, transparency, and reporting solution, you must ensure it includes the required transparency information and illegal content flagging mechanism and that you notify Google of any illegal content reports using the appropriate [form](//support.google.com/legal/troubleshooter/1114905?sjid&#x3D;6787484030557261960-EU#ts&#x3D;2981967%2C2982031%2C12980091). | [optional] 
**video_creative_data_sharing_authorized** | **bool** | By setting this field to &#x60;true&#x60;, you, on behalf of your company, authorize Google to use video creatives associated with this Display &amp; Video 360 advertiser to provide reporting and features related to the advertiser&#39;s television campaigns. Applicable only when the advertiser has a CM360 hybrid ad server configuration. | [optional] 

## Example

```python
from openapi_client.models.advertiser_creative_config import AdvertiserCreativeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AdvertiserCreativeConfig from a JSON string
advertiser_creative_config_instance = AdvertiserCreativeConfig.from_json(json)
# print the JSON string representation of the object
print(AdvertiserCreativeConfig.to_json())

# convert the object into a dict
advertiser_creative_config_dict = advertiser_creative_config_instance.to_dict()
# create an instance of AdvertiserCreativeConfig from a dict
advertiser_creative_config_from_dict = AdvertiserCreativeConfig.from_dict(advertiser_creative_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


