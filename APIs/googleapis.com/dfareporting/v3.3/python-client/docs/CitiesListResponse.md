# CitiesListResponse

City List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cities** | [**List[City]**](City.md) | City collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#citiesListResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.cities_list_response import CitiesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CitiesListResponse from a JSON string
cities_list_response_instance = CitiesListResponse.from_json(json)
# print the JSON string representation of the object
print(CitiesListResponse.to_json())

# convert the object into a dict
cities_list_response_dict = cities_list_response_instance.to_dict()
# create an instance of CitiesListResponse from a dict
cities_list_response_from_dict = CitiesListResponse.from_dict(cities_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


