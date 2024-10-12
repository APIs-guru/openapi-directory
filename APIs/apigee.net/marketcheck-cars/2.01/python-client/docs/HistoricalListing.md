# HistoricalListing

Represents a car history entry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carfax_1_owner** | **bool** | Flag to indicate whether listing is carfax_1_owner | [optional] 
**carfax_clean_title** | **bool** | Flag to indicate whether listing is carfax_clean_title | [optional] 
**city** | **str** | City of the listing | [optional] 
**data_source** | **str** | Data source of the listing | [optional] 
**dealer_id** | **int** | Unique MC assigned dealers id for the listing | [optional] 
**dom** | **int** | Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car | [optional] 
**dom_180** | **int** | Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car | [optional] 
**dom_active** | **int** | Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car | [optional] 
**exterior_color** | **str** | Exterior color of the car | [optional] 
**financing_options** | [**List[ListingFinance]**](ListingFinance.md) | Array of all finance offers for this listing | [optional] 
**first_seen_at** | **int** | Listing first seen at first scraped timestamp | [optional] 
**first_seen_at_date** | **str** | Listing first seen at first scraped date | [optional] 
**heading** | **str** | Listing title as displayed on the source website | [optional] 
**id** | **str** | Unique identifier representing a specific listing from the Marketcheck database | [optional] 
**interior_color** | **str** | Interior color of the car | [optional] 
**inventory_type** | **str** | Inventory type of car | [optional] 
**is_certified** | **int** | Certified car | [optional] 
**is_searchable** | **str** | Flag to indicate listing is marked searchable or not | [optional] 
**last_seen_at** | **int** | Listing last seen at (most recent) timestamp | [optional] 
**last_seen_at_date** | **str** | Listing last seen at (most recent) date | [optional] 
**latitude** | **str** | Latitude of the listing | [optional] 
**leasing_options** | [**List[ListingLease]**](ListingLease.md) | Array of all finance offers for this listing | [optional] 
**longitude** | **str** | Longitude of the listing | [optional] 
**miles** | **int** | Odometer reading / reported miles usage for the car | [optional] 
**msrp** | **int** | MSRP for the car | [optional] 
**price** | **int** | Asking price for the car | [optional] 
**ref_miles** | **str** | Last Odometer reading / reported miles usage for the car. If the asking miles value is not or is available then the last_miles could perhaps be used. last_miles is the miles for the car listed on the source website as of last_miles_dt date | [optional] 
**ref_miles_dt** | **int** | The date at which the last miles was reported online. This is earlier to last_seen_date | [optional] 
**ref_price** | **str** | Last reported price for the car. If the asking price value is not or is available then the last_price could perhaps be used. last_price is the price for the car listed on the source website as of last_price_dt date | [optional] 
**ref_price_dt** | **int** | The date at which the last price was reported online. This is earlier to last_seen_date | [optional] 
**scraped_at** | **int** | Listing last seen at date timestamp | [optional] 
**scraped_at_date** | **str** | Listing last seen at date | [optional] 
**seller_name** | **str** | Seller name of the listing from the Marketcheck database | [optional] 
**seller_name_o** | **str** | Seller name of the listing from the Marketcheck database | [optional] 
**seller_type** | **str** | Seller type for the car | [optional] 
**source** | **str** | Source domain of the listing | [optional] 
**state** | **str** | State of the listing | [optional] 
**status_date** | **int** | Timestamp of status date | [optional] 
**stock_no** | **str** | Stock number of car in dealers inventory | [optional] 
**street** | **str** | Street of the listing | [optional] 
**trim_r** | **str** | Trim of the car | [optional] 
**vdp_url** | **str** | Vehicle Details Page url of the specific car | [optional] 
**vin** | **str** | VIN for the car | [optional] 
**zip** | **str** | Zip of the listing | [optional] 

## Example

```python
from openapi_client.models.historical_listing import HistoricalListing

# TODO update the JSON string below
json = "{}"
# create an instance of HistoricalListing from a JSON string
historical_listing_instance = HistoricalListing.from_json(json)
# print the JSON string representation of the object
print(HistoricalListing.to_json())

# convert the object into a dict
historical_listing_dict = historical_listing_instance.to_dict()
# create an instance of HistoricalListing from a dict
historical_listing_from_dict = HistoricalListing.from_dict(historical_listing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


