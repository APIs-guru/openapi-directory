# GoogleCloudDialogflowCxV3beta1VariantsHistory

The history of variants update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**update_time** | **str** | Update time of the variants. | [optional] 
**version_variants** | [**GoogleCloudDialogflowCxV3beta1VersionVariants**](GoogleCloudDialogflowCxV3beta1VersionVariants.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_variants_history import GoogleCloudDialogflowCxV3beta1VariantsHistory

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1VariantsHistory from a JSON string
google_cloud_dialogflow_cx_v3beta1_variants_history_instance = GoogleCloudDialogflowCxV3beta1VariantsHistory.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1VariantsHistory.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_variants_history_dict = google_cloud_dialogflow_cx_v3beta1_variants_history_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1VariantsHistory from a dict
google_cloud_dialogflow_cx_v3beta1_variants_history_from_dict = GoogleCloudDialogflowCxV3beta1VariantsHistory.from_dict(google_cloud_dialogflow_cx_v3beta1_variants_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


