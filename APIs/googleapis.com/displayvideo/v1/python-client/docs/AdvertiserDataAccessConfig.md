# AdvertiserDataAccessConfig

Settings that control how advertiser related data may be accessed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sdf_config** | [**AdvertiserSdfConfig**](AdvertiserSdfConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.advertiser_data_access_config import AdvertiserDataAccessConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AdvertiserDataAccessConfig from a JSON string
advertiser_data_access_config_instance = AdvertiserDataAccessConfig.from_json(json)
# print the JSON string representation of the object
print(AdvertiserDataAccessConfig.to_json())

# convert the object into a dict
advertiser_data_access_config_dict = advertiser_data_access_config_instance.to_dict()
# create an instance of AdvertiserDataAccessConfig from a dict
advertiser_data_access_config_from_dict = AdvertiserDataAccessConfig.from_dict(advertiser_data_access_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


