# AppCategoryTargetingOptionDetails

Represents a targetable collection of apps. A collection lets you target dynamic groups of related apps that are maintained by the platform, for example `All Apps/Google Play/Games`. This will be populated in the app_category_details field when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The name of the app collection. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_category_targeting_option_details import AppCategoryTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AppCategoryTargetingOptionDetails from a JSON string
app_category_targeting_option_details_instance = AppCategoryTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(AppCategoryTargetingOptionDetails.to_json())

# convert the object into a dict
app_category_targeting_option_details_dict = app_category_targeting_option_details_instance.to_dict()
# create an instance of AppCategoryTargetingOptionDetails from a dict
app_category_targeting_option_details_from_dict = AppCategoryTargetingOptionDetails.from_dict(app_category_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


