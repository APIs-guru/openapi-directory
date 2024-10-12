# GoogleCloudDialogflowCxV3beta1Match

Represents one match result of MatchIntent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | The confidence of this match. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation. | [optional] 
**event** | **str** | The event that matched the query. Filled for &#x60;EVENT&#x60;, &#x60;NO_MATCH&#x60; and &#x60;NO_INPUT&#x60; match types. | [optional] 
**intent** | [**GoogleCloudDialogflowCxV3beta1Intent**](GoogleCloudDialogflowCxV3beta1Intent.md) |  | [optional] 
**match_type** | **str** | Type of this Match. | [optional] 
**parameters** | **Dict[str, object]** | The collection of parameters extracted from the query. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter&#39;s entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter&#39;s entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. | [optional] 
**resolved_input** | **str** | Final text input which was matched during MatchIntent. This value can be different from original input sent in request because of spelling correction or other processing. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_match import GoogleCloudDialogflowCxV3beta1Match

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1Match from a JSON string
google_cloud_dialogflow_cx_v3beta1_match_instance = GoogleCloudDialogflowCxV3beta1Match.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1Match.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_match_dict = google_cloud_dialogflow_cx_v3beta1_match_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1Match from a dict
google_cloud_dialogflow_cx_v3beta1_match_from_dict = GoogleCloudDialogflowCxV3beta1Match.from_dict(google_cloud_dialogflow_cx_v3beta1_match_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


