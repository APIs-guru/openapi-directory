# InAppPurchaseAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**in_app_purchase_type** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 
**reference_name** | **str** |  | [optional] 
**state** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.in_app_purchase_attributes import InAppPurchaseAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of InAppPurchaseAttributes from a JSON string
in_app_purchase_attributes_instance = InAppPurchaseAttributes.from_json(json)
# print the JSON string representation of the object
print(InAppPurchaseAttributes.to_json())

# convert the object into a dict
in_app_purchase_attributes_dict = in_app_purchase_attributes_instance.to_dict()
# create an instance of InAppPurchaseAttributes from a dict
in_app_purchase_attributes_from_dict = InAppPurchaseAttributes.from_dict(in_app_purchase_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


