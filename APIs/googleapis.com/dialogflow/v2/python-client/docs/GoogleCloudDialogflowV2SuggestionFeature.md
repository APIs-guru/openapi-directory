# GoogleCloudDialogflowV2SuggestionFeature

The type of Human Agent Assistant API suggestion to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of Human Agent Assistant API feature to request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_suggestion_feature import GoogleCloudDialogflowV2SuggestionFeature

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2SuggestionFeature from a JSON string
google_cloud_dialogflow_v2_suggestion_feature_instance = GoogleCloudDialogflowV2SuggestionFeature.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2SuggestionFeature.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_suggestion_feature_dict = google_cloud_dialogflow_v2_suggestion_feature_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2SuggestionFeature from a dict
google_cloud_dialogflow_v2_suggestion_feature_from_dict = GoogleCloudDialogflowV2SuggestionFeature.from_dict(google_cloud_dialogflow_v2_suggestion_feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


