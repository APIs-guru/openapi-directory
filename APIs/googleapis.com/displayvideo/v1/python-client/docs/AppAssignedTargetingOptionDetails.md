# AppAssignedTargetingOptionDetails

Details for assigned app targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | Required. The ID of the app. Android&#39;s Play store app uses bundle ID, for example &#x60;com.google.android.gm&#x60;. Apple&#39;s App store app ID uses 9 digit string, for example &#x60;422689480&#x60;. | [optional] 
**app_platform** | **str** | Indicates the platform of the targeted app. If this field is not specified, the app platform will be assumed to be mobile (i.e., Android or iOS), and we will derive the appropriate mobile platform from the app ID. | [optional] 
**display_name** | **str** | Output only. The display name of the app. | [optional] [readonly] 
**negative** | **bool** | Indicates if this option is being negatively targeted. | [optional] 

## Example

```python
from openapi_client.models.app_assigned_targeting_option_details import AppAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AppAssignedTargetingOptionDetails from a JSON string
app_assigned_targeting_option_details_instance = AppAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(AppAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
app_assigned_targeting_option_details_dict = app_assigned_targeting_option_details_instance.to_dict()
# create an instance of AppAssignedTargetingOptionDetails from a dict
app_assigned_targeting_option_details_from_dict = AppAssignedTargetingOptionDetails.from_dict(app_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


