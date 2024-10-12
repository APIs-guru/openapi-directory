# Payments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Payment]**](Payment.md) | The list of Payments for the account. One or both of a) the account&#39;s most recent payment; and b) the account&#39;s upcoming payment. | [optional] 
**kind** | **str** | Kind of list this is, in this case adsense#payments. | [optional] [default to 'adsense#payments']

## Example

```python
from openapi_client.models.payments import Payments

# TODO update the JSON string below
json = "{}"
# create an instance of Payments from a JSON string
payments_instance = Payments.from_json(json)
# print the JSON string representation of the object
print(Payments.to_json())

# convert the object into a dict
payments_dict = payments_instance.to_dict()
# create an instance of Payments from a dict
payments_from_dict = Payments.from_dict(payments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


