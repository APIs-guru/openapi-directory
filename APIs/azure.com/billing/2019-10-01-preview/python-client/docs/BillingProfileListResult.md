# BillingProfileListResult

Result of listing billing profiles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[BillingProfile]**](BillingProfile.md) | The list of billing profiles. | [optional] [readonly] 

## Example

```python
from openapi_client.models.billing_profile_list_result import BillingProfileListResult

# TODO update the JSON string below
json = "{}"
# create an instance of BillingProfileListResult from a JSON string
billing_profile_list_result_instance = BillingProfileListResult.from_json(json)
# print the JSON string representation of the object
print(BillingProfileListResult.to_json())

# convert the object into a dict
billing_profile_list_result_dict = billing_profile_list_result_instance.to_dict()
# create an instance of BillingProfileListResult from a dict
billing_profile_list_result_from_dict = BillingProfileListResult.from_dict(billing_profile_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


