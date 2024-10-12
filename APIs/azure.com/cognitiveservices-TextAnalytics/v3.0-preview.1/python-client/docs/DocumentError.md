# DocumentError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**TextAnalyticsError**](TextAnalyticsError.md) |  | 
**id** | **str** | Document Id. | 

## Example

```python
from openapi_client.models.document_error import DocumentError

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentError from a JSON string
document_error_instance = DocumentError.from_json(json)
# print the JSON string representation of the object
print(DocumentError.to_json())

# convert the object into a dict
document_error_dict = document_error_instance.to_dict()
# create an instance of DocumentError from a dict
document_error_from_dict = DocumentError.from_dict(document_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


