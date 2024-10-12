# InAppPurchase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**InAppPurchaseAttributes**](InAppPurchaseAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**InAppPurchaseRelationships**](InAppPurchaseRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.in_app_purchase import InAppPurchase

# TODO update the JSON string below
json = "{}"
# create an instance of InAppPurchase from a JSON string
in_app_purchase_instance = InAppPurchase.from_json(json)
# print the JSON string representation of the object
print(InAppPurchase.to_json())

# convert the object into a dict
in_app_purchase_dict = in_app_purchase_instance.to_dict()
# create an instance of InAppPurchase from a dict
in_app_purchase_from_dict = InAppPurchase.from_dict(in_app_purchase_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


