# BrowserAssignedTargetingOptionDetails

Details for assigned browser targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BROWSER`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name of the browser. | [optional] [readonly] 
**negative** | **bool** | Indicates if this option is being negatively targeted. All assigned browser targeting options on the same resource must have the same value for this field. | [optional] 
**targeting_option_id** | **str** | Required. The targeting_option_id of a TargetingOption of type &#x60;TARGETING_TYPE_BROWSER&#x60;. | [optional] 

## Example

```python
from openapi_client.models.browser_assigned_targeting_option_details import BrowserAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of BrowserAssignedTargetingOptionDetails from a JSON string
browser_assigned_targeting_option_details_instance = BrowserAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(BrowserAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
browser_assigned_targeting_option_details_dict = browser_assigned_targeting_option_details_instance.to_dict()
# create an instance of BrowserAssignedTargetingOptionDetails from a dict
browser_assigned_targeting_option_details_from_dict = BrowserAssignedTargetingOptionDetails.from_dict(browser_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


