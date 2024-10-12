# LanguageAssignedTargetingOptionDetails

Details for assigned language targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_LANGUAGE`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name of the language (e.g., \&quot;French\&quot;). | [optional] [readonly] 
**negative** | **bool** | Indicates if this option is being negatively targeted. All assigned language targeting options on the same resource must have the same value for this field. | [optional] 
**targeting_option_id** | **str** | Required. The targeting_option_id of a TargetingOption of type &#x60;TARGETING_TYPE_LANGUAGE&#x60;. | [optional] 

## Example

```python
from openapi_client.models.language_assigned_targeting_option_details import LanguageAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of LanguageAssignedTargetingOptionDetails from a JSON string
language_assigned_targeting_option_details_instance = LanguageAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(LanguageAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
language_assigned_targeting_option_details_dict = language_assigned_targeting_option_details_instance.to_dict()
# create an instance of LanguageAssignedTargetingOptionDetails from a dict
language_assigned_targeting_option_details_from_dict = LanguageAssignedTargetingOptionDetails.from_dict(language_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


