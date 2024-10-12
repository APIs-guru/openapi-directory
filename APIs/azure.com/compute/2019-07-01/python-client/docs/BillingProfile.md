# BillingProfile

Specifies the billing related details of a Azure Spot VM or VMSS. <br><br>Minimum api-version: 2019-03-01.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_price** | **float** | Specifies the maximum price you are willing to pay for a Azure Spot VM/VMSS. This price is in US Dollars. &lt;br&gt;&lt;br&gt; This price will be compared with the current Azure Spot price for the VM size. Also, the prices are compared at the time of create/update of Azure Spot VM/VMSS and the operation will only succeed if  the maxPrice is greater than the current Azure Spot price. &lt;br&gt;&lt;br&gt; The maxPrice will also be used for evicting a Azure Spot VM/VMSS if the current Azure Spot price goes beyond the maxPrice after creation of VM/VMSS. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; - Any decimal value greater than zero. Example: 0.01538 &lt;br&gt;&lt;br&gt; -1 – indicates default price to be up-to on-demand. &lt;br&gt;&lt;br&gt; You can set the maxPrice to -1 to indicate that the Azure Spot VM/VMSS should not be evicted for price reasons. Also, the default max price is -1 if it is not provided by you. &lt;br&gt;&lt;br&gt;Minimum api-version: 2019-03-01. | [optional] 

## Example

```python
from openapi_client.models.billing_profile import BillingProfile

# TODO update the JSON string below
json = "{}"
# create an instance of BillingProfile from a JSON string
billing_profile_instance = BillingProfile.from_json(json)
# print the JSON string representation of the object
print(BillingProfile.to_json())

# convert the object into a dict
billing_profile_dict = billing_profile_instance.to_dict()
# create an instance of BillingProfile from a dict
billing_profile_from_dict = BillingProfile.from_dict(billing_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


