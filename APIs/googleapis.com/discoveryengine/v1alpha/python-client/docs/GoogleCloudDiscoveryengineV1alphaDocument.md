# GoogleCloudDiscoveryengineV1alphaDocument

Document captures all raw metadata information of items to be recommended or searched.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acl_info** | [**GoogleCloudDiscoveryengineV1alphaDocumentAclInfo**](GoogleCloudDiscoveryengineV1alphaDocumentAclInfo.md) |  | [optional] 
**content** | [**GoogleCloudDiscoveryengineV1alphaDocumentContent**](GoogleCloudDiscoveryengineV1alphaDocumentContent.md) |  | [optional] 
**derived_struct_data** | **Dict[str, object]** | Output only. This field is OUTPUT_ONLY. It contains derived data that are not in the original input document. | [optional] [readonly] 
**id** | **str** | Immutable. The identifier of the document. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. | [optional] 
**index_time** | **str** | Output only. The last time the document was indexed. If this field is set, the document could be returned in search results. This field is OUTPUT_ONLY. If this field is not populated, it means the document has never been indexed. | [optional] [readonly] 
**json_data** | **str** | The JSON string representation of the document. It should conform to the registered Schema or an &#x60;INVALID_ARGUMENT&#x60; error is thrown. | [optional] 
**name** | **str** | Immutable. The full resource name of the document. Format: &#x60;projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document_id}&#x60;. This field must be a UTF-8 encoded string with a length limit of 1024 characters. | [optional] 
**parent_document_id** | **str** | The identifier of the parent document. Currently supports at most two level document hierarchy. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. | [optional] 
**schema_id** | **str** | The identifier of the schema located in the same data store. | [optional] 
**struct_data** | **Dict[str, object]** | The structured JSON data for the document. It should conform to the registered Schema or an &#x60;INVALID_ARGUMENT&#x60; error is thrown. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_document import GoogleCloudDiscoveryengineV1alphaDocument

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaDocument from a JSON string
google_cloud_discoveryengine_v1alpha_document_instance = GoogleCloudDiscoveryengineV1alphaDocument.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaDocument.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_document_dict = google_cloud_discoveryengine_v1alpha_document_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaDocument from a dict
google_cloud_discoveryengine_v1alpha_document_from_dict = GoogleCloudDiscoveryengineV1alphaDocument.from_dict(google_cloud_discoveryengine_v1alpha_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


