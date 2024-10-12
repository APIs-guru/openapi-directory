# SensitiveCategoryTargetingOptionDetails

Represents a targetable sensitive category. This will be populated in the sensitive_category_details field of the TargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sensitive_category** | **str** | Output only. An enum for the DV360 Sensitive category content classifier. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sensitive_category_targeting_option_details import SensitiveCategoryTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SensitiveCategoryTargetingOptionDetails from a JSON string
sensitive_category_targeting_option_details_instance = SensitiveCategoryTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(SensitiveCategoryTargetingOptionDetails.to_json())

# convert the object into a dict
sensitive_category_targeting_option_details_dict = sensitive_category_targeting_option_details_instance.to_dict()
# create an instance of SensitiveCategoryTargetingOptionDetails from a dict
sensitive_category_targeting_option_details_from_dict = SensitiveCategoryTargetingOptionDetails.from_dict(sensitive_category_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


