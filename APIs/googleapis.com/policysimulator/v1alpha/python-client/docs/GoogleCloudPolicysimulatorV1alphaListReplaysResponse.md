# GoogleCloudPolicysimulatorV1alphaListReplaysResponse

Response message for Simulator.ListReplays.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token that you can use to retrieve the next page of results. If this field is omitted, there are no subsequent pages. | [optional] 
**replays** | [**List[GoogleCloudPolicysimulatorV1alphaReplay]**](GoogleCloudPolicysimulatorV1alphaReplay.md) | The list of Replay objects. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policysimulator_v1alpha_list_replays_response import GoogleCloudPolicysimulatorV1alphaListReplaysResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicysimulatorV1alphaListReplaysResponse from a JSON string
google_cloud_policysimulator_v1alpha_list_replays_response_instance = GoogleCloudPolicysimulatorV1alphaListReplaysResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicysimulatorV1alphaListReplaysResponse.to_json())

# convert the object into a dict
google_cloud_policysimulator_v1alpha_list_replays_response_dict = google_cloud_policysimulator_v1alpha_list_replays_response_instance.to_dict()
# create an instance of GoogleCloudPolicysimulatorV1alphaListReplaysResponse from a dict
google_cloud_policysimulator_v1alpha_list_replays_response_from_dict = GoogleCloudPolicysimulatorV1alphaListReplaysResponse.from_dict(google_cloud_policysimulator_v1alpha_list_replays_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


