# AppPrice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppPriceRelationships**](AppPriceRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_price import AppPrice

# TODO update the JSON string below
json = "{}"
# create an instance of AppPrice from a JSON string
app_price_instance = AppPrice.from_json(json)
# print the JSON string representation of the object
print(AppPrice.to_json())

# convert the object into a dict
app_price_dict = app_price_instance.to_dict()
# create an instance of AppPrice from a dict
app_price_from_dict = AppPrice.from_dict(app_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


