# GoogleCloudDialogflowCxV3FlowImportStrategy

The flow import strategy used for resource conflict resolution associated with an ImportFlowRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**global_import_strategy** | **str** | Optional. Import strategy for resource conflict resolution, applied globally throughout the flow. It will be applied for all display name conflicts in the imported content. If not specified, &#39;CREATE_NEW&#39; is assumed. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_flow_import_strategy import GoogleCloudDialogflowCxV3FlowImportStrategy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3FlowImportStrategy from a JSON string
google_cloud_dialogflow_cx_v3_flow_import_strategy_instance = GoogleCloudDialogflowCxV3FlowImportStrategy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3FlowImportStrategy.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_flow_import_strategy_dict = google_cloud_dialogflow_cx_v3_flow_import_strategy_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3FlowImportStrategy from a dict
google_cloud_dialogflow_cx_v3_flow_import_strategy_from_dict = GoogleCloudDialogflowCxV3FlowImportStrategy.from_dict(google_cloud_dialogflow_cx_v3_flow_import_strategy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


