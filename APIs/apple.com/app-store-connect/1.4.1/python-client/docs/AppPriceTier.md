# AppPriceTier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppPriceTierRelationships**](AppPriceTierRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_price_tier import AppPriceTier

# TODO update the JSON string below
json = "{}"
# create an instance of AppPriceTier from a JSON string
app_price_tier_instance = AppPriceTier.from_json(json)
# print the JSON string representation of the object
print(AppPriceTier.to_json())

# convert the object into a dict
app_price_tier_dict = app_price_tier_instance.to_dict()
# create an instance of AppPriceTier from a dict
app_price_tier_from_dict = AppPriceTier.from_dict(app_price_tier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


