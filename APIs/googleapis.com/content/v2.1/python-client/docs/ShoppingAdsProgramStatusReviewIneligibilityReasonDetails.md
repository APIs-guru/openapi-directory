# ShoppingAdsProgramStatusReviewIneligibilityReasonDetails

Additional details for review ineligibility reasons.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cooldown_time** | **str** | This timestamp represents end of cooldown period for review ineligbility reason &#x60;IN_COOLDOWN_PERIOD&#x60;. | [optional] 

## Example

```python
from openapi_client.models.shopping_ads_program_status_review_ineligibility_reason_details import ShoppingAdsProgramStatusReviewIneligibilityReasonDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ShoppingAdsProgramStatusReviewIneligibilityReasonDetails from a JSON string
shopping_ads_program_status_review_ineligibility_reason_details_instance = ShoppingAdsProgramStatusReviewIneligibilityReasonDetails.from_json(json)
# print the JSON string representation of the object
print(ShoppingAdsProgramStatusReviewIneligibilityReasonDetails.to_json())

# convert the object into a dict
shopping_ads_program_status_review_ineligibility_reason_details_dict = shopping_ads_program_status_review_ineligibility_reason_details_instance.to_dict()
# create an instance of ShoppingAdsProgramStatusReviewIneligibilityReasonDetails from a dict
shopping_ads_program_status_review_ineligibility_reason_details_from_dict = ShoppingAdsProgramStatusReviewIneligibilityReasonDetails.from_dict(shopping_ads_program_status_review_ineligibility_reason_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


