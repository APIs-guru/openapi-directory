# MotorcycleBaseListing

Base motorcycle listing

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build** | [**MotorcycleBuild**](MotorcycleBuild.md) |  | [optional] 
**color** | **str** | Color of the motorcycle | [optional] 
**dealer** | [**NestDealer**](NestDealer.md) |  | [optional] 
**dist** | **float** | Distance of the motorcycle&#39;s location from the specified user lcoation | [optional] 
**dp_url** | **str** | Details Page url of the specific motorcycle | [optional] 
**first_seen_at** | **int** | Listing first seen at first scraped timestamp | [optional] 
**first_seen_at_date** | **str** | Listing first seen at first scraped date | [optional] 
**heading** | **str** | Listing title as displayed on the source website | [optional] 
**id** | **str** | Unique identifier representing a specific listing from the Marketcheck database | [optional] 
**inventory_type** | **str** | Inventory type of motorcycle | [optional] 
**last_seen_at** | **int** | Listing last seen at (most recent) timestamp | [optional] 
**last_seen_at_date** | **str** | Listing last seen at (most recent) date | [optional] 
**media** | [**ListingNestMedia**](ListingNestMedia.md) |  | [optional] 
**miles** | **int** | Odometer reading / reported miles usage for the motorcycle | [optional] 
**msrp** | **int** | MSRP for the motorcycle | [optional] 
**price** | **int** | Asking price for the motorcycle | [optional] 
**scraped_at** | **float** | Listing last seen at date timestamp | [optional] 
**scraped_at_date** | **str** | Listing last seen at date | [optional] 
**seller_type** | **str** | Seller type for the motorcycle | [optional] 
**source** | **str** | Source domain of the listing | [optional] 
**stock_no** | **str** | Stock number of motorcycle in dealers inventory | [optional] 
**vin** | **str** | VIN for the Motorcycle | [optional] 

## Example

```python
from openapi_client.models.motorcycle_base_listing import MotorcycleBaseListing

# TODO update the JSON string below
json = "{}"
# create an instance of MotorcycleBaseListing from a JSON string
motorcycle_base_listing_instance = MotorcycleBaseListing.from_json(json)
# print the JSON string representation of the object
print(MotorcycleBaseListing.to_json())

# convert the object into a dict
motorcycle_base_listing_dict = motorcycle_base_listing_instance.to_dict()
# create an instance of MotorcycleBaseListing from a dict
motorcycle_base_listing_from_dict = MotorcycleBaseListing.from_dict(motorcycle_base_listing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


