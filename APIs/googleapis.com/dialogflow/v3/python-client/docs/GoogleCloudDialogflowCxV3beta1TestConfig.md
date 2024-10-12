# GoogleCloudDialogflowCxV3beta1TestConfig

Represents configurations for a test case.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flow** | **str** | Flow name to start the test case with. Format: &#x60;projects//locations//agents//flows/&#x60;. Only one of &#x60;flow&#x60; and &#x60;page&#x60; should be set to indicate the starting point of the test case. If both are set, &#x60;page&#x60; takes precedence over &#x60;flow&#x60;. If neither is set, the test case will start with start page on the default start flow. | [optional] 
**page** | **str** | The page to start the test case with. Format: &#x60;projects//locations//agents//flows//pages/&#x60;. Only one of &#x60;flow&#x60; and &#x60;page&#x60; should be set to indicate the starting point of the test case. If both are set, &#x60;page&#x60; takes precedence over &#x60;flow&#x60;. If neither is set, the test case will start with start page on the default start flow. | [optional] 
**tracking_parameters** | **List[str]** | Session parameters to be compared when calculating differences. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_test_config import GoogleCloudDialogflowCxV3beta1TestConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1TestConfig from a JSON string
google_cloud_dialogflow_cx_v3beta1_test_config_instance = GoogleCloudDialogflowCxV3beta1TestConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1TestConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_test_config_dict = google_cloud_dialogflow_cx_v3beta1_test_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1TestConfig from a dict
google_cloud_dialogflow_cx_v3beta1_test_config_from_dict = GoogleCloudDialogflowCxV3beta1TestConfig.from_dict(google_cloud_dialogflow_cx_v3beta1_test_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


