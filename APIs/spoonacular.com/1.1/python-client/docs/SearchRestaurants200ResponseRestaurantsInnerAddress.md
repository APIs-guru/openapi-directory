# SearchRestaurants200ResponseRestaurantsInnerAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**lat** | **float** |  | [optional] 
**latitude** | **float** |  | [optional] 
**lon** | **float** |  | [optional] 
**longitude** | **float** |  | [optional] 
**state** | **str** |  | [optional] 
**street_addr** | **str** |  | [optional] 
**street_addr_2** | **str** |  | [optional] 
**zipcode** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.search_restaurants200_response_restaurants_inner_address import SearchRestaurants200ResponseRestaurantsInnerAddress

# TODO update the JSON string below
json = "{}"
# create an instance of SearchRestaurants200ResponseRestaurantsInnerAddress from a JSON string
search_restaurants200_response_restaurants_inner_address_instance = SearchRestaurants200ResponseRestaurantsInnerAddress.from_json(json)
# print the JSON string representation of the object
print(SearchRestaurants200ResponseRestaurantsInnerAddress.to_json())

# convert the object into a dict
search_restaurants200_response_restaurants_inner_address_dict = search_restaurants200_response_restaurants_inner_address_instance.to_dict()
# create an instance of SearchRestaurants200ResponseRestaurantsInnerAddress from a dict
search_restaurants200_response_restaurants_inner_address_from_dict = SearchRestaurants200ResponseRestaurantsInnerAddress.from_dict(search_restaurants200_response_restaurants_inner_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


