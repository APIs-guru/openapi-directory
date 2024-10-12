# GeographicData

RETS MLS Geographic Data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**county** | **str** | Listing county | [optional] 
**directions** | **str** | Directions to the property | [optional] 
**lat** | **float** | Listing latitude (if available) | [optional] 
**lng** | **float** | Listing longitude (if available) | [optional] 
**market_area** | **str** | Listing GeoMarket area. May be the same as mlsArea | [optional] 

## Example

```python
from openapi_client.models.geographic_data import GeographicData

# TODO update the JSON string below
json = "{}"
# create an instance of GeographicData from a JSON string
geographic_data_instance = GeographicData.from_json(json)
# print the JSON string representation of the object
print(GeographicData.to_json())

# convert the object into a dict
geographic_data_dict = geographic_data_instance.to_dict()
# create an instance of GeographicData from a dict
geographic_data_from_dict = GeographicData.from_dict(geographic_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


