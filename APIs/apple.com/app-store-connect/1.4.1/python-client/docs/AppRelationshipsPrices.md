# AppRelationshipsPrices


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppRelationshipsPricesDataInner]**](AppRelationshipsPricesDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_relationships_prices import AppRelationshipsPrices

# TODO update the JSON string below
json = "{}"
# create an instance of AppRelationshipsPrices from a JSON string
app_relationships_prices_instance = AppRelationshipsPrices.from_json(json)
# print the JSON string representation of the object
print(AppRelationshipsPrices.to_json())

# convert the object into a dict
app_relationships_prices_dict = app_relationships_prices_instance.to_dict()
# create an instance of AppRelationshipsPrices from a dict
app_relationships_prices_from_dict = AppRelationshipsPrices.from_dict(app_relationships_prices_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


