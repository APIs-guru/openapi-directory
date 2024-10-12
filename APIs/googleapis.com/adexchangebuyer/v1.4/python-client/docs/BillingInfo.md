# BillingInfo

The configuration data for an Ad Exchange billing info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **int** | Account id. | [optional] 
**account_name** | **str** | Account name. | [optional] 
**billing_id** | **List[str]** | A list of adgroup IDs associated with this particular account. These IDs may show up as part of a realtime bidding BidRequest, which indicates a bid request for this account. | [optional] 
**kind** | **str** | Resource type. | [optional] [default to 'adexchangebuyer#billingInfo']

## Example

```python
from openapi_client.models.billing_info import BillingInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BillingInfo from a JSON string
billing_info_instance = BillingInfo.from_json(json)
# print the JSON string representation of the object
print(BillingInfo.to_json())

# convert the object into a dict
billing_info_dict = billing_info_instance.to_dict()
# create an instance of BillingInfo from a dict
billing_info_from_dict = BillingInfo.from_dict(billing_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


