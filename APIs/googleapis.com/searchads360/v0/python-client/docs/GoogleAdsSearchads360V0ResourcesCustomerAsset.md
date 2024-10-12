# GoogleAdsSearchads360V0ResourcesCustomerAsset

A link between a customer and an asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **str** | Required. Immutable. The asset which is linked to the customer. | [optional] 
**resource_name** | **str** | Immutable. The resource name of the customer asset. CustomerAsset resource names have the form: &#x60;customers/{customer_id}/customerAssets/{asset_id}~{field_type}&#x60; | [optional] 
**status** | **str** | Status of the customer asset. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_customer_asset import GoogleAdsSearchads360V0ResourcesCustomerAsset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesCustomerAsset from a JSON string
google_ads_searchads360_v0_resources_customer_asset_instance = GoogleAdsSearchads360V0ResourcesCustomerAsset.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesCustomerAsset.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_customer_asset_dict = google_ads_searchads360_v0_resources_customer_asset_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesCustomerAsset from a dict
google_ads_searchads360_v0_resources_customer_asset_from_dict = GoogleAdsSearchads360V0ResourcesCustomerAsset.from_dict(google_ads_searchads360_v0_resources_customer_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


