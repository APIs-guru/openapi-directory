# GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings

The Knowledge Connector settings for this page or flow. This includes information such as the attached Knowledge Bases, and the way to execute fulfillment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_store_connections** | [**List[GoogleCloudDialogflowCxV3beta1DataStoreConnection]**](GoogleCloudDialogflowCxV3beta1DataStoreConnection.md) | Optional. List of related data store connections. | [optional] 
**enabled** | **bool** | Whether Knowledge Connector is enabled or not. | [optional] 
**target_flow** | **str** | The target flow to transition to. Format: &#x60;projects//locations//agents//flows/&#x60;. | [optional] 
**target_page** | **str** | The target page to transition to. Format: &#x60;projects//locations//agents//flows//pages/&#x60;. | [optional] 
**trigger_fulfillment** | [**GoogleCloudDialogflowCxV3beta1Fulfillment**](GoogleCloudDialogflowCxV3beta1Fulfillment.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_knowledge_connector_settings import GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings from a JSON string
google_cloud_dialogflow_cx_v3beta1_knowledge_connector_settings_instance = GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_knowledge_connector_settings_dict = google_cloud_dialogflow_cx_v3beta1_knowledge_connector_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings from a dict
google_cloud_dialogflow_cx_v3beta1_knowledge_connector_settings_from_dict = GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings.from_dict(google_cloud_dialogflow_cx_v3beta1_knowledge_connector_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


