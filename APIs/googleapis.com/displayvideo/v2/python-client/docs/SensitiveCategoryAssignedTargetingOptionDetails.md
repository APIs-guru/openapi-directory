# SensitiveCategoryAssignedTargetingOptionDetails

Targeting details for sensitive category. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excluded_sensitive_category** | **str** | Required. An enum for the DV360 Sensitive category content classified to be EXCLUDED. | [optional] 

## Example

```python
from openapi_client.models.sensitive_category_assigned_targeting_option_details import SensitiveCategoryAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SensitiveCategoryAssignedTargetingOptionDetails from a JSON string
sensitive_category_assigned_targeting_option_details_instance = SensitiveCategoryAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(SensitiveCategoryAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
sensitive_category_assigned_targeting_option_details_dict = sensitive_category_assigned_targeting_option_details_instance.to_dict()
# create an instance of SensitiveCategoryAssignedTargetingOptionDetails from a dict
sensitive_category_assigned_targeting_option_details_from_dict = SensitiveCategoryAssignedTargetingOptionDetails.from_dict(sensitive_category_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


