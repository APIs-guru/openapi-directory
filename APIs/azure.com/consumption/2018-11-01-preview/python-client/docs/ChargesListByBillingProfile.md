# ChargesListByBillingProfile

Result of listing charge summary by billing profile. It contains a list of available change summaries in reverse chronological order by billing period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ChargeSummaryByBillingProfile]**](ChargeSummaryByBillingProfile.md) | The list of charge summary by billing profile. | [optional] [readonly] 

## Example

```python
from openapi_client.models.charges_list_by_billing_profile import ChargesListByBillingProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ChargesListByBillingProfile from a JSON string
charges_list_by_billing_profile_instance = ChargesListByBillingProfile.from_json(json)
# print the JSON string representation of the object
print(ChargesListByBillingProfile.to_json())

# convert the object into a dict
charges_list_by_billing_profile_dict = charges_list_by_billing_profile_instance.to_dict()
# create an instance of ChargesListByBillingProfile from a dict
charges_list_by_billing_profile_from_dict = ChargesListByBillingProfile.from_dict(charges_list_by_billing_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


