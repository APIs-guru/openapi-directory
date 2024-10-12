# UpdateDocumentStyleRequest

Updates the DocumentStyle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_style** | [**DocumentStyle**](DocumentStyle.md) |  | [optional] 
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;document_style&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. For example to update the background, set &#x60;fields&#x60; to &#x60;\&quot;background\&quot;&#x60;. | [optional] 

## Example

```python
from openapi_client.models.update_document_style_request import UpdateDocumentStyleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDocumentStyleRequest from a JSON string
update_document_style_request_instance = UpdateDocumentStyleRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDocumentStyleRequest.to_json())

# convert the object into a dict
update_document_style_request_dict = update_document_style_request_instance.to_dict()
# create an instance of UpdateDocumentStyleRequest from a dict
update_document_style_request_from_dict = UpdateDocumentStyleRequest.from_dict(update_document_style_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


