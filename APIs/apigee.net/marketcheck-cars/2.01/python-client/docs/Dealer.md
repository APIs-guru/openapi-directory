# Dealer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City of the dealer | [optional] 
**country** | **str** | country of the dealer | [optional] 
**data_source** | **str** | Datasource of the dealer | [optional] 
**dealer_type** | **str** | Type of dealer (franchise/independent) | [optional] 
**dealership_group_name** | **str** | Dealership group name of dealer | [optional] 
**distance** | **float** | Distance of dealer from given location | [optional] 
**id** | **str** | The unique id associated with the dealer in the Marketcheck database | [optional] 
**inventory_url** | **str** | Website of the dealer | [optional] 
**latitude** | **str** | Latutide for the dealer location | [optional] 
**listing_count** | **int** | Listing count of the dealer | [optional] 
**location_ll** | **str** | location_ll for the dealer location | [optional] 
**longitude** | **str** | Longitude for the dealer location | [optional] 
**seller_email** | **str** | Contact email of the dealer | [optional] 
**seller_name** | **str** | Name of the dealer | [optional] 
**seller_phone** | **str** | Contact no of the dealer | [optional] 
**state** | **str** | State of the dealer | [optional] 
**status** | **str** | Status of the dealer | [optional] 
**street** | **str** | Street of the dealer | [optional] 
**zip** | **str** | Zip of the dealer | [optional] 

## Example

```python
from openapi_client.models.dealer import Dealer

# TODO update the JSON string below
json = "{}"
# create an instance of Dealer from a JSON string
dealer_instance = Dealer.from_json(json)
# print the JSON string representation of the object
print(Dealer.to_json())

# convert the object into a dict
dealer_dict = dealer_instance.to_dict()
# create an instance of Dealer from a dict
dealer_from_dict = Dealer.from_dict(dealer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


