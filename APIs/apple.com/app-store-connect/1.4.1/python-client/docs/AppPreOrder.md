# AppPreOrder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppPreOrderAttributes**](AppPreOrderAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppEncryptionDeclarationRelationships**](AppEncryptionDeclarationRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_pre_order import AppPreOrder

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreOrder from a JSON string
app_pre_order_instance = AppPreOrder.from_json(json)
# print the JSON string representation of the object
print(AppPreOrder.to_json())

# convert the object into a dict
app_pre_order_dict = app_pre_order_instance.to_dict()
# create an instance of AppPreOrder from a dict
app_pre_order_from_dict = AppPreOrder.from_dict(app_pre_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


