# GoogleCloudDialogflowCxV3BoostSpec

Boost specification to boost certain documents. A copy of google.cloud.discoveryengine.v1main.BoostSpec, field documentation is available at https://cloud.google.com/generative-ai-app-builder/docs/reference/rest/v1alpha/BoostSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition_boost_specs** | [**List[GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpec]**](GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpec.md) | Optional. Condition boost specifications. If a document matches multiple conditions in the specifictions, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 20. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_boost_spec import GoogleCloudDialogflowCxV3BoostSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3BoostSpec from a JSON string
google_cloud_dialogflow_cx_v3_boost_spec_instance = GoogleCloudDialogflowCxV3BoostSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3BoostSpec.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_boost_spec_dict = google_cloud_dialogflow_cx_v3_boost_spec_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3BoostSpec from a dict
google_cloud_dialogflow_cx_v3_boost_spec_from_dict = GoogleCloudDialogflowCxV3BoostSpec.from_dict(google_cloud_dialogflow_cx_v3_boost_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


