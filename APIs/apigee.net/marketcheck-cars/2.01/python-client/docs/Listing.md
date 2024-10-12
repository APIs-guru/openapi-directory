# Listing

Represents a full list of attributes available with Marketcheck for a car

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_ext_color** | **str** | Base exterior color of the car | [optional] 
**base_int_color** | **str** | Base interior color of the car | [optional] 
**build** | [**Build**](Build.md) |  | [optional] 
**carfax_1_owner** | **bool** | Flag to indicate whether listing is carfax_1_owner | [optional] 
**carfax_clean_title** | **bool** | Flag to indicate whether listing is carfax_clean_title | [optional] 
**data_source** | **str** | Data source of the listing | [optional] 
**dealer** | [**NestDealer**](NestDealer.md) |  | [optional] 
**dom** | **int** | Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car | [optional] 
**dom_180** | **int** | Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car | [optional] 
**dom_active** | **int** | Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car | [optional] 
**exterior_color** | **str** | Exterior color of the car | [optional] 
**extra** | [**ListingNestExtraAttributes**](ListingNestExtraAttributes.md) |  | [optional] 
**financing_options** | [**List[ListingFinance]**](ListingFinance.md) | Array of all finance offers for this listing | [optional] 
**first_seen_at** | **int** | Listing first seen at first scraped timestamp | [optional] 
**first_seen_at_date** | **str** | Listing first seen at first scraped date | [optional] 
**first_seen_at_mc** | **int** | Listing first seen at first scraped at MC timestamp | [optional] 
**first_seen_at_mc_date** | **str** | Listing first seen at first scraped at MC date | [optional] 
**first_seen_at_source** | **int** | Listing first seen at source relisted timestamp | [optional] 
**first_seen_at_source_date** | **str** | Listing first seen at source relisted date | [optional] 
**heading** | **str** | Listing title as displayed on the source website | [optional] 
**id** | **str** | Unique identifier representing a specific listing from the Marketcheck database | [optional] 
**interior_color** | **str** | Interior color of the car | [optional] 
**inventory_type** | **str** | Inventory type of car | [optional] 
**is_certified** | **int** | Certified car | [optional] 
**last_seen_at** | **int** | Listing last seen at (most recent) timestamp | [optional] 
**last_seen_at_date** | **str** | Listing last seen at (most recent) date | [optional] 
**leasing_options** | [**List[ListingLease]**](ListingLease.md) | Array of all finance offers for this listing | [optional] 
**media** | [**ListingNestMedia**](ListingNestMedia.md) |  | [optional] 
**miles** | **int** | Odometer reading / reported miles usage for the car | [optional] 
**msrp** | **int** | MSRP for the car | [optional] 
**price** | **int** | Asking price for the car | [optional] 
**price_change_percent** | **float** | Percentage difference between the cars&#39;s current price and ref_price i.e. last reported price | [optional] 
**rank** | **int** | Relative rank of the listing determined by ranking service | [optional] 
**ref_miles** | **str** | Last Odometer reading / reported miles usage for the car. If the asking miles value is not or is available then the last_miles could perhaps be used. last_miles is the miles for the car listed on the source website as of last_miles_dt date | [optional] 
**ref_miles_dt** | **int** | The date at which the last miles was reported online. This is earlier to last_seen_date | [optional] 
**ref_price** | **str** | Last reported price for the car. If the asking price value is not or is available then the last_price could perhaps be used. last_price is the price for the car listed on the source website as of last_price_dt date | [optional] 
**ref_price_dt** | **int** | The date at which the last price was reported online. This is earlier to last_seen_date | [optional] 
**score** | **float** | Score of the ranked listing as per the ranking criteria determined by ranking service | [optional] 
**scraped_at** | **int** | Listing last seen at date timestamp | [optional] 
**scraped_at_date** | **str** | Listing last seen at date | [optional] 
**seller_type** | **str** | Seller type for the car | [optional] 
**source** | **str** | Source domain of the listing | [optional] 
**stock_no** | **str** | Stock number of car in dealers inventory | [optional] 
**vdp_url** | **str** | Vehicle Details Page url of the specific car | [optional] 
**vehicle_registration_mark** | **str** |  Vehicle Registration Mark of the car | [optional] 
**vin** | **str** | VIN for the car | [optional] 

## Example

```python
from openapi_client.models.listing import Listing

# TODO update the JSON string below
json = "{}"
# create an instance of Listing from a JSON string
listing_instance = Listing.from_json(json)
# print the JSON string representation of the object
print(Listing.to_json())

# convert the object into a dict
listing_dict = listing_instance.to_dict()
# create an instance of Listing from a dict
listing_from_dict = Listing.from_dict(listing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


