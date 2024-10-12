# ResponseOkPreviewResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**PreviewResponse**](PreviewResponse.md) |  | 

## Example

```python
from openapi_client.models.response_ok_preview_response import ResponseOkPreviewResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseOkPreviewResponse from a JSON string
response_ok_preview_response_instance = ResponseOkPreviewResponse.from_json(json)
# print the JSON string representation of the object
print(ResponseOkPreviewResponse.to_json())

# convert the object into a dict
response_ok_preview_response_dict = response_ok_preview_response_instance.to_dict()
# create an instance of ResponseOkPreviewResponse from a dict
response_ok_preview_response_from_dict = ResponseOkPreviewResponse.from_dict(response_ok_preview_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


