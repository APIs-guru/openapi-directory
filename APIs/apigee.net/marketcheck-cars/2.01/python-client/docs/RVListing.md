# RVListing

Represents a full list of attributes available with Marketcheck for a car

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build** | [**RVBuild**](RVBuild.md) |  | [optional] 
**dealer** | [**NestDealer**](NestDealer.md) |  | [optional] 
**dp_url** | **str** | Details Page url of the specific RV | [optional] 
**exterior_color** | **str** | Exterior color of the RV | [optional] 
**extra** | [**ListingNestExtraAttributes**](ListingNestExtraAttributes.md) |  | [optional] 
**first_seen_at** | **int** | Listing first seen at first scraped timestamp | [optional] 
**first_seen_at_date** | **str** | Listing first seen at first scraped date | [optional] 
**heading** | **str** | Listing title as displayed on the source website | [optional] 
**id** | **str** | Unique identifier representing a specific listing from the Marketcheck database | [optional] 
**interior_color** | **str** | Interior color of the RV | [optional] 
**inventory_type** | **str** | Inventory type of RV | [optional] 
**last_seen_at** | **int** | Listing last seen at (most recent) timestamp | [optional] 
**last_seen_at_date** | **str** | Listing last seen at (most recent) date | [optional] 
**media** | [**ListingNestMedia**](ListingNestMedia.md) |  | [optional] 
**miles** | **int** | Odometer reading / reported miles usage for the RV | [optional] 
**msrp** | **int** | MSRP for the RV | [optional] 
**price** | **int** | Asking price for the RV | [optional] 
**scraped_at** | **float** | Listing last seen at date timestamp | [optional] 
**scraped_at_date** | **str** | Listing last seen at date | [optional] 
**seller_type** | **str** | Seller type for the RV | [optional] 
**source** | **str** | Source domain of the listing | [optional] 
**stock_no** | **str** | Stock number of RV in dealers inventory | [optional] 
**vin** | **str** | VIN for the RV | [optional] 

## Example

```python
from openapi_client.models.rv_listing import RVListing

# TODO update the JSON string below
json = "{}"
# create an instance of RVListing from a JSON string
rv_listing_instance = RVListing.from_json(json)
# print the JSON string representation of the object
print(RVListing.to_json())

# convert the object into a dict
rv_listing_dict = rv_listing_instance.to_dict()
# create an instance of RVListing from a dict
rv_listing_from_dict = RVListing.from_dict(rv_listing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


