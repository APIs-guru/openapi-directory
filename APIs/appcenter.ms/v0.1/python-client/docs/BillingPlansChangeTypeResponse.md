# BillingPlansChangeTypeResponse

Responses for requests that detect billing plans change type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.billing_plans_change_type_response import BillingPlansChangeTypeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BillingPlansChangeTypeResponse from a JSON string
billing_plans_change_type_response_instance = BillingPlansChangeTypeResponse.from_json(json)
# print the JSON string representation of the object
print(BillingPlansChangeTypeResponse.to_json())

# convert the object into a dict
billing_plans_change_type_response_dict = billing_plans_change_type_response_instance.to_dict()
# create an instance of BillingPlansChangeTypeResponse from a dict
billing_plans_change_type_response_from_dict = BillingPlansChangeTypeResponse.from_dict(billing_plans_change_type_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


