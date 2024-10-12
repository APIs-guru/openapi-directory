# AdvertiserSdfConfig

Structured Data Files (SDF) settings of an advertiser.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**override_partner_sdf_config** | **bool** | Whether or not this advertiser overrides the SDF configuration of its parent partner. By default, an advertiser inherits the SDF configuration from the parent partner. To override the partner configuration, set this field to &#x60;true&#x60; and provide the new configuration in sdfConfig. | [optional] 
**sdf_config** | [**SdfConfig**](SdfConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.advertiser_sdf_config import AdvertiserSdfConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AdvertiserSdfConfig from a JSON string
advertiser_sdf_config_instance = AdvertiserSdfConfig.from_json(json)
# print the JSON string representation of the object
print(AdvertiserSdfConfig.to_json())

# convert the object into a dict
advertiser_sdf_config_dict = advertiser_sdf_config_instance.to_dict()
# create an instance of AdvertiserSdfConfig from a dict
advertiser_sdf_config_from_dict = AdvertiserSdfConfig.from_dict(advertiser_sdf_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


