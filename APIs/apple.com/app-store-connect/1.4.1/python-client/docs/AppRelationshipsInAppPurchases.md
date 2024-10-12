# AppRelationshipsInAppPurchases


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppRelationshipsInAppPurchasesDataInner]**](AppRelationshipsInAppPurchasesDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_relationships_in_app_purchases import AppRelationshipsInAppPurchases

# TODO update the JSON string below
json = "{}"
# create an instance of AppRelationshipsInAppPurchases from a JSON string
app_relationships_in_app_purchases_instance = AppRelationshipsInAppPurchases.from_json(json)
# print the JSON string representation of the object
print(AppRelationshipsInAppPurchases.to_json())

# convert the object into a dict
app_relationships_in_app_purchases_dict = app_relationships_in_app_purchases_instance.to_dict()
# create an instance of AppRelationshipsInAppPurchases from a dict
app_relationships_in_app_purchases_from_dict = AppRelationshipsInAppPurchases.from_dict(app_relationships_in_app_purchases_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


