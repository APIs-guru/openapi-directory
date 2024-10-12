# BillingInfoList

A billing info feed lists Billing Info the Ad Exchange buyer account has access to. Each entry in the feed corresponds to a single billing info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[BillingInfo]**](BillingInfo.md) | A list of billing info relevant for your account. | [optional] 
**kind** | **str** | Resource type. | [optional] [default to 'adexchangebuyer#billingInfoList']

## Example

```python
from openapi_client.models.billing_info_list import BillingInfoList

# TODO update the JSON string below
json = "{}"
# create an instance of BillingInfoList from a JSON string
billing_info_list_instance = BillingInfoList.from_json(json)
# print the JSON string representation of the object
print(BillingInfoList.to_json())

# convert the object into a dict
billing_info_list_dict = billing_info_list_instance.to_dict()
# create an instance of BillingInfoList from a dict
billing_info_list_from_dict = BillingInfoList.from_dict(billing_info_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


