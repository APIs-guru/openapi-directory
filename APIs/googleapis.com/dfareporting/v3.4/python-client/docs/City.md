# City

Contains information about a city that can be targeted by ads.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** | Country code of the country to which this city belongs. | [optional] 
**country_dart_id** | **str** | DART ID of the country to which this city belongs. | [optional] 
**dart_id** | **str** | DART ID of this city. This is the ID used for targeting and generating reports. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#city\&quot;. | [optional] 
**metro_code** | **str** | Metro region code of the metro region (DMA) to which this city belongs. | [optional] 
**metro_dma_id** | **str** | ID of the metro region (DMA) to which this city belongs. | [optional] 
**name** | **str** | Name of this city. | [optional] 
**region_code** | **str** | Region code of the region to which this city belongs. | [optional] 
**region_dart_id** | **str** | DART ID of the region to which this city belongs. | [optional] 

## Example

```python
from openapi_client.models.city import City

# TODO update the JSON string below
json = "{}"
# create an instance of City from a JSON string
city_instance = City.from_json(json)
# print the JSON string representation of the object
print(City.to_json())

# convert the object into a dict
city_dict = city_instance.to_dict()
# create an instance of City from a dict
city_from_dict = City.from_dict(city_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


