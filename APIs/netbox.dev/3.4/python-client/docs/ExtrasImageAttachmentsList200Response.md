# ExtrasImageAttachmentsList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[ImageAttachment]**](ImageAttachment.md) |  | 

## Example

```python
from openapi_client.models.extras_image_attachments_list200_response import ExtrasImageAttachmentsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ExtrasImageAttachmentsList200Response from a JSON string
extras_image_attachments_list200_response_instance = ExtrasImageAttachmentsList200Response.from_json(json)
# print the JSON string representation of the object
print(ExtrasImageAttachmentsList200Response.to_json())

# convert the object into a dict
extras_image_attachments_list200_response_dict = extras_image_attachments_list200_response_instance.to_dict()
# create an instance of ExtrasImageAttachmentsList200Response from a dict
extras_image_attachments_list200_response_from_dict = ExtrasImageAttachmentsList200Response.from_dict(extras_image_attachments_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


