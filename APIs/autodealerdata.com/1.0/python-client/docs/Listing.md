# Listing


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ask_price** | **float** |  | 
**brand_name** | **str** |  | 
**color** | **str** |  | [optional] 
**dealer_id** | **int** |  | 
**first_seen** | **date** |  | 
**interior_color** | **str** |  | [optional] 
**is_new** | **bool** |  | 
**last_seen** | **date** |  | 
**mileage** | **float** |  | [optional] [default to 0]
**model_name** | **str** |  | 
**msrp** | **float** |  | 
**vin** | **str** |  | 
**vin_decode** | **object** |  | [optional] 
**year** | **float** |  | 

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


