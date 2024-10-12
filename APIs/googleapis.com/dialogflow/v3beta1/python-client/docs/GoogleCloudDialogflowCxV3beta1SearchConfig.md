# GoogleCloudDialogflowCxV3beta1SearchConfig

Search configuration for UCS search queries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boost_specs** | [**List[GoogleCloudDialogflowCxV3beta1BoostSpecs]**](GoogleCloudDialogflowCxV3beta1BoostSpecs.md) | Optional. Boosting configuration for the datastores. | [optional] 
**filter_specs** | [**List[GoogleCloudDialogflowCxV3beta1FilterSpecs]**](GoogleCloudDialogflowCxV3beta1FilterSpecs.md) | Optional. Filter configuration for the datastores. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_search_config import GoogleCloudDialogflowCxV3beta1SearchConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1SearchConfig from a JSON string
google_cloud_dialogflow_cx_v3beta1_search_config_instance = GoogleCloudDialogflowCxV3beta1SearchConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1SearchConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_search_config_dict = google_cloud_dialogflow_cx_v3beta1_search_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1SearchConfig from a dict
google_cloud_dialogflow_cx_v3beta1_search_config_from_dict = GoogleCloudDialogflowCxV3beta1SearchConfig.from_dict(google_cloud_dialogflow_cx_v3beta1_search_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


