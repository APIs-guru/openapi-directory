# AppPriceRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | [**AppEncryptionDeclarationRelationshipsApp**](AppEncryptionDeclarationRelationshipsApp.md) |  | [optional] 
**price_tier** | [**AppPriceRelationshipsPriceTier**](AppPriceRelationshipsPriceTier.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_price_relationships import AppPriceRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of AppPriceRelationships from a JSON string
app_price_relationships_instance = AppPriceRelationships.from_json(json)
# print the JSON string representation of the object
print(AppPriceRelationships.to_json())

# convert the object into a dict
app_price_relationships_dict = app_price_relationships_instance.to_dict()
# create an instance of AppPriceRelationships from a dict
app_price_relationships_from_dict = AppPriceRelationships.from_dict(app_price_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


