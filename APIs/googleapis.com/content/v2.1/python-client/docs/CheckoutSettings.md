# CheckoutSettings

`CheckoutSettings` for a specific merchant ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective_enrollment_state** | **str** | Output only. The effective value of enrollment state for a given merchant ID. If account level settings are present then this value will be a copy of the account level settings. Otherwise, it will have the value of the parent account. | [optional] [readonly] 
**effective_review_state** | **str** | Output only. The effective value of review state for a given merchant ID. If account level settings are present then this value will be a copy of the account level settings. Otherwise, it will have the value of the parent account. | [optional] [readonly] 
**effective_uri_settings** | [**UrlSettings**](UrlSettings.md) |  | [optional] 
**enrollment_state** | **str** | Output only. Reflects the merchant enrollment state in &#x60;Checkout&#x60; feature. | [optional] [readonly] 
**merchant_id** | **str** | Required. The ID of the account. | [optional] 
**review_state** | **str** | Output only. Reflects the merchant review state in &#x60;Checkout&#x60; feature. This is set based on the data quality reviews of the URL provided by the merchant. A merchant with enrollment state as &#x60;ENROLLED&#x60; can be in the following review states: &#x60;IN_REVIEW&#x60;, &#x60;APPROVED&#x60; or &#x60;DISAPPROVED&#x60;. A merchant must be in an enrollment_state of &#x60;ENROLLED&#x60; before a review can begin for the merchant. | [optional] [readonly] 
**uri_settings** | [**UrlSettings**](UrlSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.checkout_settings import CheckoutSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CheckoutSettings from a JSON string
checkout_settings_instance = CheckoutSettings.from_json(json)
# print the JSON string representation of the object
print(CheckoutSettings.to_json())

# convert the object into a dict
checkout_settings_dict = checkout_settings_instance.to_dict()
# create an instance of CheckoutSettings from a dict
checkout_settings_from_dict = CheckoutSettings.from_dict(checkout_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


