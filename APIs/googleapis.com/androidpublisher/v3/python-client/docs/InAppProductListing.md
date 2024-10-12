# InAppProductListing

Store listing of a single in-app product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benefits** | **List[str]** | Localized entitlement benefits for a subscription. | [optional] 
**description** | **str** | Description for the store listing. | [optional] 
**title** | **str** | Title for the store listing. | [optional] 

## Example

```python
from openapi_client.models.in_app_product_listing import InAppProductListing

# TODO update the JSON string below
json = "{}"
# create an instance of InAppProductListing from a JSON string
in_app_product_listing_instance = InAppProductListing.from_json(json)
# print the JSON string representation of the object
print(InAppProductListing.to_json())

# convert the object into a dict
in_app_product_listing_dict = in_app_product_listing_instance.to_dict()
# create an instance of InAppProductListing from a dict
in_app_product_listing_from_dict = InAppProductListing.from_dict(in_app_product_listing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


