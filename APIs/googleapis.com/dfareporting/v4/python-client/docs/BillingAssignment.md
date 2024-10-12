# BillingAssignment

List account, subaccount, advertiser, and campaign associated with a given Billing Profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | ID of the account associated with the billing assignment.This is a read-only, auto-generated field. | [optional] 
**advertiser_id** | **str** | ID of the advertiser associated with the billing assignment.Wildcard (*) means this assignment is not limited to a single advertiser | [optional] 
**campaign_id** | **str** | ID of the campaign associated with the billing assignment. Wildcard (*) means this assignment is not limited to a single campaign | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#billingAssignment\&quot;. | [optional] 
**subaccount_id** | **str** | ID of the subaccount associated with the billing assignment.Wildcard (*) means this assignment is not limited to a single subaccountThis is a read-only, auto-generated field. | [optional] 

## Example

```python
from openapi_client.models.billing_assignment import BillingAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of BillingAssignment from a JSON string
billing_assignment_instance = BillingAssignment.from_json(json)
# print the JSON string representation of the object
print(BillingAssignment.to_json())

# convert the object into a dict
billing_assignment_dict = billing_assignment_instance.to_dict()
# create an instance of BillingAssignment from a dict
billing_assignment_from_dict = BillingAssignment.from_dict(billing_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


