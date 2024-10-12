# DeleteFooterRequest

Deletes a Footer from the document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**footer_id** | **str** | The id of the footer to delete. If this footer is defined on DocumentStyle, the reference to this footer is removed, resulting in no footer of that type for the first section of the document. If this footer is defined on a SectionStyle, the reference to this footer is removed and the footer of that type is now continued from the previous section. | [optional] 

## Example

```python
from openapi_client.models.delete_footer_request import DeleteFooterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteFooterRequest from a JSON string
delete_footer_request_instance = DeleteFooterRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteFooterRequest.to_json())

# convert the object into a dict
delete_footer_request_dict = delete_footer_request_instance.to_dict()
# create an instance of DeleteFooterRequest from a dict
delete_footer_request_from_dict = DeleteFooterRequest.from_dict(delete_footer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


