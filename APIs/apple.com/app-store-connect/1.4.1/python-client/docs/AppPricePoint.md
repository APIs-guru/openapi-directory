# AppPricePoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppPricePointAttributes**](AppPricePointAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppPricePointRelationships**](AppPricePointRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_price_point import AppPricePoint

# TODO update the JSON string below
json = "{}"
# create an instance of AppPricePoint from a JSON string
app_price_point_instance = AppPricePoint.from_json(json)
# print the JSON string representation of the object
print(AppPricePoint.to_json())

# convert the object into a dict
app_price_point_dict = app_price_point_instance.to_dict()
# create an instance of AppPricePoint from a dict
app_price_point_from_dict = AppPricePoint.from_dict(app_price_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


