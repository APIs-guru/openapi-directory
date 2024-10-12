# AdvertiserTargetingConfig

Targeting settings related to ad serving of an advertiser.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exempt_tv_from_viewability_targeting** | **bool** | Whether or not connected TV devices are exempt from viewability targeting for all video line items under the advertiser. | [optional] 

## Example

```python
from openapi_client.models.advertiser_targeting_config import AdvertiserTargetingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AdvertiserTargetingConfig from a JSON string
advertiser_targeting_config_instance = AdvertiserTargetingConfig.from_json(json)
# print the JSON string representation of the object
print(AdvertiserTargetingConfig.to_json())

# convert the object into a dict
advertiser_targeting_config_dict = advertiser_targeting_config_instance.to_dict()
# create an instance of AdvertiserTargetingConfig from a dict
advertiser_targeting_config_from_dict = AdvertiserTargetingConfig.from_dict(advertiser_targeting_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


