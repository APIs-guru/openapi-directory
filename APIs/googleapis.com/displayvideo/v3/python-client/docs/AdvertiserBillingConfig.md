# AdvertiserBillingConfig

Billing related settings of an advertiser.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_profile_id** | **str** | Optional. The ID of a billing profile assigned to the advertiser. | [optional] 

## Example

```python
from openapi_client.models.advertiser_billing_config import AdvertiserBillingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AdvertiserBillingConfig from a JSON string
advertiser_billing_config_instance = AdvertiserBillingConfig.from_json(json)
# print the JSON string representation of the object
print(AdvertiserBillingConfig.to_json())

# convert the object into a dict
advertiser_billing_config_dict = advertiser_billing_config_instance.to_dict()
# create an instance of AdvertiserBillingConfig from a dict
advertiser_billing_config_from_dict = AdvertiserBillingConfig.from_dict(advertiser_billing_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


