# AdvertiserAdServerConfig

Ad server related settings of an advertiser.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cm_hybrid_config** | [**CmHybridConfig**](CmHybridConfig.md) |  | [optional] 
**third_party_only_config** | [**ThirdPartyOnlyConfig**](ThirdPartyOnlyConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.advertiser_ad_server_config import AdvertiserAdServerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AdvertiserAdServerConfig from a JSON string
advertiser_ad_server_config_instance = AdvertiserAdServerConfig.from_json(json)
# print the JSON string representation of the object
print(AdvertiserAdServerConfig.to_json())

# convert the object into a dict
advertiser_ad_server_config_dict = advertiser_ad_server_config_instance.to_dict()
# create an instance of AdvertiserAdServerConfig from a dict
advertiser_ad_server_config_from_dict = AdvertiserAdServerConfig.from_dict(advertiser_ad_server_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


