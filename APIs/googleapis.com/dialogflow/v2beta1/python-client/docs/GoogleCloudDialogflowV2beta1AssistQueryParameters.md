# GoogleCloudDialogflowV2beta1AssistQueryParameters

Represents the parameters of human assist query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents_metadata_filters** | **Dict[str, str]** | Key-value filters on the metadata of documents returned by article suggestion. If specified, article suggestion only returns suggested documents that match all filters in their Document.metadata. Multiple values for a metadata key should be concatenated by comma. For example, filters to match all documents that have &#39;US&#39; or &#39;CA&#39; in their market metadata values and &#39;agent&#39; in their user metadata values will be &#x60;&#x60;&#x60; documents_metadata_filters { key: \&quot;market\&quot; value: \&quot;US,CA\&quot; } documents_metadata_filters { key: \&quot;user\&quot; value: \&quot;agent\&quot; } &#x60;&#x60;&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_assist_query_parameters import GoogleCloudDialogflowV2beta1AssistQueryParameters

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1AssistQueryParameters from a JSON string
google_cloud_dialogflow_v2beta1_assist_query_parameters_instance = GoogleCloudDialogflowV2beta1AssistQueryParameters.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1AssistQueryParameters.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_assist_query_parameters_dict = google_cloud_dialogflow_v2beta1_assist_query_parameters_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1AssistQueryParameters from a dict
google_cloud_dialogflow_v2beta1_assist_query_parameters_from_dict = GoogleCloudDialogflowV2beta1AssistQueryParameters.from_dict(google_cloud_dialogflow_v2beta1_assist_query_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


