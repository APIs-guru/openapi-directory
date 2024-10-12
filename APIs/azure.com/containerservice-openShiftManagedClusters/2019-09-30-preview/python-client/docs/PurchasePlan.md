# PurchasePlan

Used for establishing the purchase context of any 3rd Party artifact through MarketPlace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The plan ID. | [optional] 
**product** | **str** | Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element. | [optional] 
**promotion_code** | **str** | The promotion code. | [optional] 
**publisher** | **str** | The plan ID. | [optional] 

## Example

```python
from openapi_client.models.purchase_plan import PurchasePlan

# TODO update the JSON string below
json = "{}"
# create an instance of PurchasePlan from a JSON string
purchase_plan_instance = PurchasePlan.from_json(json)
# print the JSON string representation of the object
print(PurchasePlan.to_json())

# convert the object into a dict
purchase_plan_dict = purchase_plan_instance.to_dict()
# create an instance of PurchasePlan from a dict
purchase_plan_from_dict = PurchasePlan.from_dict(purchase_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


