# AdvertiserAndBrand

Detected advertiser and brand information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_id** | **str** | See https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt for the list of possible values. Can be used to filter the response of the creatives.list method. | [optional] 
**advertiser_name** | **str** | Advertiser name. Can be used to filter the response of the creatives.list method. | [optional] 
**brand_id** | **str** | Detected brand ID or zero if no brand has been detected. See https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt for the list of possible values. Can be used to filter the response of the creatives.list method. | [optional] 
**brand_name** | **str** | Brand name. Can be used to filter the response of the creatives.list method. | [optional] 

## Example

```python
from openapi_client.models.advertiser_and_brand import AdvertiserAndBrand

# TODO update the JSON string below
json = "{}"
# create an instance of AdvertiserAndBrand from a JSON string
advertiser_and_brand_instance = AdvertiserAndBrand.from_json(json)
# print the JSON string representation of the object
print(AdvertiserAndBrand.to_json())

# convert the object into a dict
advertiser_and_brand_dict = advertiser_and_brand_instance.to_dict()
# create an instance of AdvertiserAndBrand from a dict
advertiser_and_brand_from_dict = AdvertiserAndBrand.from_dict(advertiser_and_brand_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


