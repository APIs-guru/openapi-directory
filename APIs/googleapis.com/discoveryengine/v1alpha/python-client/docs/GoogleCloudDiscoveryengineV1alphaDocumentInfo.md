# GoogleCloudDiscoveryengineV1alphaDocumentInfo

Detailed document information associated with a user event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The Document resource ID. | [optional] 
**name** | **str** | The Document resource full name, of the form: &#x60;projects/{project_id}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/branches/{branch_id}/documents/{document_id}&#x60; | [optional] 
**promotion_ids** | **List[str]** | The promotion IDs associated with this Document. Currently, this field is restricted to at most one ID. | [optional] 
**quantity** | **int** | Quantity of the Document associated with the user event. Defaults to 1. For example, this field will be 2 if two quantities of the same Document are involved in a &#x60;add-to-cart&#x60; event. Required for events of the following event types: * &#x60;add-to-cart&#x60; * &#x60;purchase&#x60; | [optional] 
**uri** | **str** | The Document URI - only allowed for website data stores. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_document_info import GoogleCloudDiscoveryengineV1alphaDocumentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaDocumentInfo from a JSON string
google_cloud_discoveryengine_v1alpha_document_info_instance = GoogleCloudDiscoveryengineV1alphaDocumentInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaDocumentInfo.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_document_info_dict = google_cloud_discoveryengine_v1alpha_document_info_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaDocumentInfo from a dict
google_cloud_discoveryengine_v1alpha_document_info_from_dict = GoogleCloudDiscoveryengineV1alphaDocumentInfo.from_dict(google_cloud_discoveryengine_v1alpha_document_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


