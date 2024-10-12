# TroubleshootingRecommendedActions

Recommended actions based on discovered issues.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_id** | **str** | ID of the recommended action. | [optional] 
**action_text** | **str** | Description of recommended actions. | [optional] 
**action_uri** | **str** | The uri linking to a documentation for the recommended troubleshooting actions. | [optional] 
**action_uri_text** | **str** | The information from the URI for the recommended troubleshooting actions. | [optional] 

## Example

```python
from openapi_client.models.troubleshooting_recommended_actions import TroubleshootingRecommendedActions

# TODO update the JSON string below
json = "{}"
# create an instance of TroubleshootingRecommendedActions from a JSON string
troubleshooting_recommended_actions_instance = TroubleshootingRecommendedActions.from_json(json)
# print the JSON string representation of the object
print(TroubleshootingRecommendedActions.to_json())

# convert the object into a dict
troubleshooting_recommended_actions_dict = troubleshooting_recommended_actions_instance.to_dict()
# create an instance of TroubleshootingRecommendedActions from a dict
troubleshooting_recommended_actions_from_dict = TroubleshootingRecommendedActions.from_dict(troubleshooting_recommended_actions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


