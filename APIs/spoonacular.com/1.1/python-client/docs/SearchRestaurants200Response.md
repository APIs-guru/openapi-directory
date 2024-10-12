# SearchRestaurants200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**restaurants** | [**List[SearchRestaurants200ResponseRestaurantsInner]**](SearchRestaurants200ResponseRestaurantsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_restaurants200_response import SearchRestaurants200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SearchRestaurants200Response from a JSON string
search_restaurants200_response_instance = SearchRestaurants200Response.from_json(json)
# print the JSON string representation of the object
print(SearchRestaurants200Response.to_json())

# convert the object into a dict
search_restaurants200_response_dict = search_restaurants200_response_instance.to_dict()
# create an instance of SearchRestaurants200Response from a dict
search_restaurants200_response_from_dict = SearchRestaurants200Response.from_dict(search_restaurants200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


