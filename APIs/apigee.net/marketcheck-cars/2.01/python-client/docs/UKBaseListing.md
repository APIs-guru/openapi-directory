# UKBaseListing

Minimal set of attributes describing a listing

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_ext_color** | **str** | Base exterior color of the car | [optional] 
**base_int_color** | **str** | Base interior color of the car | [optional] 
**build** | [**Build**](Build.md) |  | [optional] 
**car_location** | [**CarLocation**](CarLocation.md) |  | [optional] 
**carfax_1_owner** | **bool** | Flag to indicate whether listing is carfax_1_owner | [optional] 
**carfax_clean_title** | **bool** | Flag to indicate whether listing is carfax_clean_title | [optional] 
**co2_emissions** | **str** | CO2 emissions by car | [optional] 
**data_source** | **str** | Data source of the listing | [optional] 
**dealer** | [**NestDealer**](NestDealer.md) |  | [optional] 
**dist** | **float** | Distance of the car&#39;s location from the specified user lcoation | [optional] 
**dom** | **int** | Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car | [optional] 
**dom_180** | **int** | Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car | [optional] 
**dom_active** | **int** | Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car | [optional] 
**exterior_color** | **str** | Exterior color of the car | [optional] 
**financing_options** | [**List[ListingFinance]**](ListingFinance.md) | Array of all finance offers for this listing | [optional] 
**first_seen_at** | **int** | Listing first seen at first scraped timestamp | [optional] 
**first_seen_at_date** | **str** | Listing first seen at first scraped date | [optional] 
**heading** | **str** | Listing title as displayed on the source website | [optional] 
**id** | **str** | Unique identifier representing a specific listing from the Marketcheck database | [optional] 
**in_transit** | **bool** | in_transit of the listing | [optional] 
**insurance_group** | **str** | Insurance Group of car | [optional] 
**interior_color** | **str** | Interior color of the car | [optional] 
**inventory_type** | **str** | Inventory type of car | [optional] 
**is_certified** | **int** | Certified car | [optional] 
**is_translated** | **bool** | is_translated of the listing | [optional] 
**last_seen_at** | **int** | Listing last seen at (most recent) timestamp | [optional] 
**last_seen_at_date** | **str** | Listing last seen at (most recent) date | [optional] 
**leasing_options** | [**List[ListingLease]**](ListingLease.md) | Array of all finance offers for this listing | [optional] 
**media** | [**ListingNestMedia**](ListingNestMedia.md) |  | [optional] 
**miles** | **int** | Odometer reading / reported miles usage for the car | [optional] 
**model_code** | **str** | model_code of the listing | [optional] 
**msrp** | **int** | MSRP for the car | [optional] 
**num_owners** | **str** | Number of owners | [optional] 
**price** | **int** | Asking price for the car | [optional] 
**price_change_percent** | **float** | Percentage difference between the cars&#39;s current price and ref_price i.e. last reported price | [optional] 
**ref_miles** | **str** | Last Odometer reading / reported miles usage for the car. If the asking miles value is not or is available then the last_miles could perhaps be used. last_miles is the miles for the car listed on the source website as of last_miles_dt date | [optional] 
**ref_miles_dt** | **int** | The date at which the last miles was reported online. This is earlier to last_seen_date | [optional] 
**ref_price** | **str** | Last reported price for the car. If the asking price value is not or is available then the last_price could perhaps be used. last_price is the price for the car listed on the source website as of last_price_dt date | [optional] 
**ref_price_dt** | **int** | The date at which the last price was reported online. This is earlier to last_seen_date | [optional] 
**scraped_at** | **float** | Listing last seen at date timestamp | [optional] 
**scraped_at_date** | **str** | Listing last seen at date | [optional] 
**seller_type** | **str** | Seller type for the car | [optional] 
**source** | **str** | Source domain of the listing | [optional] 
**stock_no** | **str** | Stock number of car in dealers inventory | [optional] 
**title_type** | **str** | title_type of the listing | [optional] 
**uvc_id** | **str** | UVC ID of the car | [optional] 
**vdp_url** | **str** | Vehicle Details Page url of the specific car | [optional] 
**vehicle_registration_mark** | **str** |  Vehicle Registration Mark of the car | [optional] 

## Example

```python
from openapi_client.models.uk_base_listing import UKBaseListing

# TODO update the JSON string below
json = "{}"
# create an instance of UKBaseListing from a JSON string
uk_base_listing_instance = UKBaseListing.from_json(json)
# print the JSON string representation of the object
print(UKBaseListing.to_json())

# convert the object into a dict
uk_base_listing_dict = uk_base_listing_instance.to_dict()
# create an instance of UKBaseListing from a dict
uk_base_listing_from_dict = UKBaseListing.from_dict(uk_base_listing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


