# UpdatePageElementAltTextRequest

Updates the alt text title and/or description of a page element.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The updated alt text description of the page element. If unset the existing value will be maintained. The description is exposed to screen readers and other accessibility interfaces. Only use human readable values related to the content of the page element. | [optional] 
**object_id** | **str** | The object ID of the page element the updates are applied to. | [optional] 
**title** | **str** | The updated alt text title of the page element. If unset the existing value will be maintained. The title is exposed to screen readers and other accessibility interfaces. Only use human readable values related to the content of the page element. | [optional] 

## Example

```python
from openapi_client.models.update_page_element_alt_text_request import UpdatePageElementAltTextRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePageElementAltTextRequest from a JSON string
update_page_element_alt_text_request_instance = UpdatePageElementAltTextRequest.from_json(json)
# print the JSON string representation of the object
print(UpdatePageElementAltTextRequest.to_json())

# convert the object into a dict
update_page_element_alt_text_request_dict = update_page_element_alt_text_request_instance.to_dict()
# create an instance of UpdatePageElementAltTextRequest from a dict
update_page_element_alt_text_request_from_dict = UpdatePageElementAltTextRequest.from_dict(update_page_element_alt_text_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


