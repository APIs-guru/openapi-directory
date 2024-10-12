# AppCategoryAssignedTargetingOptionDetails

Details for assigned app category targeting option. This will be populated in the app_category_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name of the app category. | [optional] [readonly] 
**negative** | **bool** | Indicates if this option is being negatively targeted. | [optional] 
**targeting_option_id** | **str** | Required. The targeting_option_id field when targeting_type is &#x60;TARGETING_TYPE_APP_CATEGORY&#x60;. | [optional] 

## Example

```python
from openapi_client.models.app_category_assigned_targeting_option_details import AppCategoryAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AppCategoryAssignedTargetingOptionDetails from a JSON string
app_category_assigned_targeting_option_details_instance = AppCategoryAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(AppCategoryAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
app_category_assigned_targeting_option_details_dict = app_category_assigned_targeting_option_details_instance.to_dict()
# create an instance of AppCategoryAssignedTargetingOptionDetails from a dict
app_category_assigned_targeting_option_details_from_dict = AppCategoryAssignedTargetingOptionDetails.from_dict(app_category_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


