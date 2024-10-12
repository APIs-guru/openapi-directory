# Metro

Contains information about a metro region that can be targeted by ads.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** | Country code of the country to which this metro region belongs. | [optional] 
**country_dart_id** | **str** | DART ID of the country to which this metro region belongs. | [optional] 
**dart_id** | **str** | DART ID of this metro region. | [optional] 
**dma_id** | **str** | DMA ID of this metro region. This is the ID used for targeting and generating reports, and is equivalent to metro_code. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#metro\&quot;. | [optional] 
**metro_code** | **str** | Metro code of this metro region. This is equivalent to dma_id. | [optional] 
**name** | **str** | Name of this metro region. | [optional] 

## Example

```python
from openapi_client.models.metro import Metro

# TODO update the JSON string below
json = "{}"
# create an instance of Metro from a JSON string
metro_instance = Metro.from_json(json)
# print the JSON string representation of the object
print(Metro.to_json())

# convert the object into a dict
metro_dict = metro_instance.to_dict()
# create an instance of Metro from a dict
metro_from_dict = Metro.from_dict(metro_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


