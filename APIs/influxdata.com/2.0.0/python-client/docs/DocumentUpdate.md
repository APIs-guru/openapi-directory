# DocumentUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **object** |  | [optional] 
**meta** | [**DocumentMeta**](DocumentMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.document_update import DocumentUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentUpdate from a JSON string
document_update_instance = DocumentUpdate.from_json(json)
# print the JSON string representation of the object
print(DocumentUpdate.to_json())

# convert the object into a dict
document_update_dict = document_update_instance.to_dict()
# create an instance of DocumentUpdate from a dict
document_update_from_dict = DocumentUpdate.from_dict(document_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


