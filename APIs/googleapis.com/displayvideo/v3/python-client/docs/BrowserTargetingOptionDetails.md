# BrowserTargetingOptionDetails

Represents a targetable browser. This will be populated in the browser_details field when targeting_type is `TARGETING_TYPE_BROWSER`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name of the browser. | [optional] [readonly] 

## Example

```python
from openapi_client.models.browser_targeting_option_details import BrowserTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of BrowserTargetingOptionDetails from a JSON string
browser_targeting_option_details_instance = BrowserTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(BrowserTargetingOptionDetails.to_json())

# convert the object into a dict
browser_targeting_option_details_dict = browser_targeting_option_details_instance.to_dict()
# create an instance of BrowserTargetingOptionDetails from a dict
browser_targeting_option_details_from_dict = BrowserTargetingOptionDetails.from_dict(browser_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


