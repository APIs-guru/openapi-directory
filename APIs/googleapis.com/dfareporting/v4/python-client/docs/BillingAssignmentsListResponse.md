# BillingAssignmentsListResponse

Billing assignment List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_assignments** | [**List[BillingAssignment]**](BillingAssignment.md) | Billing assignments collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#billingAssignmentsListResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.billing_assignments_list_response import BillingAssignmentsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BillingAssignmentsListResponse from a JSON string
billing_assignments_list_response_instance = BillingAssignmentsListResponse.from_json(json)
# print the JSON string representation of the object
print(BillingAssignmentsListResponse.to_json())

# convert the object into a dict
billing_assignments_list_response_dict = billing_assignments_list_response_instance.to_dict()
# create an instance of BillingAssignmentsListResponse from a dict
billing_assignments_list_response_from_dict = BillingAssignmentsListResponse.from_dict(billing_assignments_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


