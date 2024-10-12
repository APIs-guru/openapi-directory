# DeleteHeaderRequest

Deletes a Header from the document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header_id** | **str** | The id of the header to delete. If this header is defined on DocumentStyle, the reference to this header is removed, resulting in no header of that type for the first section of the document. If this header is defined on a SectionStyle, the reference to this header is removed and the header of that type is now continued from the previous section. | [optional] 

## Example

```python
from openapi_client.models.delete_header_request import DeleteHeaderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteHeaderRequest from a JSON string
delete_header_request_instance = DeleteHeaderRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteHeaderRequest.to_json())

# convert the object into a dict
delete_header_request_dict = delete_header_request_instance.to_dict()
# create an instance of DeleteHeaderRequest from a dict
delete_header_request_from_dict = DeleteHeaderRequest.from_dict(delete_header_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


