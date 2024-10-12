# GoogleCloudDialogflowCxV3MatchIntentRequest

Request of MatchIntent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**persist_parameter_changes** | **bool** | Persist session parameter changes from &#x60;query_params&#x60;. | [optional] 
**query_input** | [**GoogleCloudDialogflowCxV3QueryInput**](GoogleCloudDialogflowCxV3QueryInput.md) |  | [optional] 
**var_query_params** | [**GoogleCloudDialogflowCxV3QueryParameters**](GoogleCloudDialogflowCxV3QueryParameters.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_match_intent_request import GoogleCloudDialogflowCxV3MatchIntentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3MatchIntentRequest from a JSON string
google_cloud_dialogflow_cx_v3_match_intent_request_instance = GoogleCloudDialogflowCxV3MatchIntentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3MatchIntentRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_match_intent_request_dict = google_cloud_dialogflow_cx_v3_match_intent_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3MatchIntentRequest from a dict
google_cloud_dialogflow_cx_v3_match_intent_request_from_dict = GoogleCloudDialogflowCxV3MatchIntentRequest.from_dict(google_cloud_dialogflow_cx_v3_match_intent_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


