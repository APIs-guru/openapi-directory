# DocumentMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] 
**name** | **str** |  | 
**template_id** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] [readonly] 
**version** | **str** |  | 

## Example

```python
from openapi_client.models.document_meta import DocumentMeta

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentMeta from a JSON string
document_meta_instance = DocumentMeta.from_json(json)
# print the JSON string representation of the object
print(DocumentMeta.to_json())

# convert the object into a dict
document_meta_dict = document_meta_instance.to_dict()
# create an instance of DocumentMeta from a dict
document_meta_from_dict = DocumentMeta.from_dict(document_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


