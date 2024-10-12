# Coupon

The details for the coupon available for the item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**redemption_code** | **str** | The coupon code. | [optional] 
**terms** | [**Terms**](Terms.md) |  | [optional] 

## Example

```python
from openapi_client.models.coupon import Coupon

# TODO update the JSON string below
json = "{}"
# create an instance of Coupon from a JSON string
coupon_instance = Coupon.from_json(json)
# print the JSON string representation of the object
print(Coupon.to_json())

# convert the object into a dict
coupon_dict = coupon_instance.to_dict()
# create an instance of Coupon from a dict
coupon_from_dict = Coupon.from_dict(coupon_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


