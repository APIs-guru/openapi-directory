# BillingProfile

A billing profile resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BillingProfileProperties**](BillingProfileProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

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


