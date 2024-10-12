# BillingInformationPartial

Optional information required for issuing invoices. Only accounts with `billing_information` present can be used as a `billing_account`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) |  | [optional] 
**name** | **str** | Name of the organisation receiving invoices.  | [optional] 
**vat_number** | **str** | Value-added tax number, required for european reverse charge system.  | [optional] 

## Example

```python
from openapi_client.models.billing_information_partial import BillingInformationPartial

# TODO update the JSON string below
json = "{}"
# create an instance of BillingInformationPartial from a JSON string
billing_information_partial_instance = BillingInformationPartial.from_json(json)
# print the JSON string representation of the object
print(BillingInformationPartial.to_json())

# convert the object into a dict
billing_information_partial_dict = billing_information_partial_instance.to_dict()
# create an instance of BillingInformationPartial from a dict
billing_information_partial_from_dict = BillingInformationPartial.from_dict(billing_information_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


