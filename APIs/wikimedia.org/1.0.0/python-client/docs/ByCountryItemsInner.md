# ByCountryItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** |  | [optional] 
**countries** | [**List[ByCountryItemsInnerCountriesInner]**](ByCountryItemsInnerCountriesInner.md) |  | [optional] 
**month** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**year** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.by_country_items_inner import ByCountryItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ByCountryItemsInner from a JSON string
by_country_items_inner_instance = ByCountryItemsInner.from_json(json)
# print the JSON string representation of the object
print(ByCountryItemsInner.to_json())

# convert the object into a dict
by_country_items_inner_dict = by_country_items_inner_instance.to_dict()
# create an instance of ByCountryItemsInner from a dict
by_country_items_inner_from_dict = ByCountryItemsInner.from_dict(by_country_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


