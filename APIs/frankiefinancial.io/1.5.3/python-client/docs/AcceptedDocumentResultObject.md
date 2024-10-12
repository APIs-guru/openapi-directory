# AcceptedDocumentResultObject

The following fields represent the data you need in order to retrieve the results of the requested function. See the details of the notification API for more. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_id** | **str** | If you&#39;re calling a processing function of some kind, a check number will be issued. This field will only be present if the function you&#39;re calling would normally return a checkId (such as scan, verify, and compare).  | [optional] 
**document_id** | **str** | When an ID document is created/uploaded, it is assigned a documentId. You&#39;ll see this in a successful response or successfully accepted response. This can then be referenced in subsequent calls if you&#39;re uploading more/updated data.  | [optional] 
**function** | **str** | Short description of the function called.  | [optional] 
**request_id** | **str** | Unique identifier for every request. Can be used for tracking down answers with technical support.   Uses the ULID format (a time-based, sortable UUID)  Note: this will be different for every request.  | [optional] 

## Example

```python
from openapi_client.models.accepted_document_result_object import AcceptedDocumentResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of AcceptedDocumentResultObject from a JSON string
accepted_document_result_object_instance = AcceptedDocumentResultObject.from_json(json)
# print the JSON string representation of the object
print(AcceptedDocumentResultObject.to_json())

# convert the object into a dict
accepted_document_result_object_dict = accepted_document_result_object_instance.to_dict()
# create an instance of AcceptedDocumentResultObject from a dict
accepted_document_result_object_from_dict = AcceptedDocumentResultObject.from_dict(accepted_document_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


