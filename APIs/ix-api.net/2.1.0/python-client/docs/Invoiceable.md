# Invoiceable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account** | **str** | An account requires billing_information to be used as a &#x60;billing_account&#x60;. | 
**contract_ref** | **str** | A reference to a contract. If no specific contract is used, a default MAY be chosen by the implementer.  | [optional] 
**purchase_order** | **str** | Purchase Order ID which will be displayed on the invoice.  | [optional] [default to '']

## Example

```python
from openapi_client.models.invoiceable import Invoiceable

# TODO update the JSON string below
json = "{}"
# create an instance of Invoiceable from a JSON string
invoiceable_instance = Invoiceable.from_json(json)
# print the JSON string representation of the object
print(Invoiceable.to_json())

# convert the object into a dict
invoiceable_dict = invoiceable_instance.to_dict()
# create an instance of Invoiceable from a dict
invoiceable_from_dict = Invoiceable.from_dict(invoiceable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


