# BillingInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) |  | 
**name** | **str** | Name of the organisation receiving invoices.  | 
**vat_number** | **str** | Value-added tax number, required for european reverse charge system.  | [optional] 

## Example

```python
from openapi_client.models.billing_information import BillingInformation

# TODO update the JSON string below
json = "{}"
# create an instance of BillingInformation from a JSON string
billing_information_instance = BillingInformation.from_json(json)
# print the JSON string representation of the object
print(BillingInformation.to_json())

# convert the object into a dict
billing_information_dict = billing_information_instance.to_dict()
# create an instance of BillingInformation from a dict
billing_information_from_dict = BillingInformation.from_dict(billing_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


