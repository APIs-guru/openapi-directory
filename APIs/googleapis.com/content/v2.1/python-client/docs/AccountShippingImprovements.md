# AccountShippingImprovements

Not available for MCAs [accounts](https://support.google.com/merchants/answer/188487). By turning on [automatic shipping improvements](https://support.google.com/merchants/answer/10027038), you are allowing Google to improve the accuracy of your delivery times shown to shoppers using Google. More accurate delivery times, especially when faster, typically lead to better conversion rates. Google will improve your estimated delivery times based on various factors: * Delivery address of an order * Current handling time and shipping time settings * Estimated weekdays or business days * Parcel tracking data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_shipping_improvements** | **bool** | Enables automatic shipping improvements. | [optional] 

## Example

```python
from openapi_client.models.account_shipping_improvements import AccountShippingImprovements

# TODO update the JSON string below
json = "{}"
# create an instance of AccountShippingImprovements from a JSON string
account_shipping_improvements_instance = AccountShippingImprovements.from_json(json)
# print the JSON string representation of the object
print(AccountShippingImprovements.to_json())

# convert the object into a dict
account_shipping_improvements_dict = account_shipping_improvements_instance.to_dict()
# create an instance of AccountShippingImprovements from a dict
account_shipping_improvements_from_dict = AccountShippingImprovements.from_dict(account_shipping_improvements_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


