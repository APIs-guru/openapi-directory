# UpdatePageElementTransformRequest

Updates the transform of a page element. Updating the transform of a group will change the absolute transform of the page elements in that group, which can change their visual appearance. See the documentation for PageElement.transform for more details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply_mode** | **str** | The apply mode of the transform update. | [optional] 
**object_id** | **str** | The object ID of the page element to update. | [optional] 
**transform** | [**AffineTransform**](AffineTransform.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_page_element_transform_request import UpdatePageElementTransformRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePageElementTransformRequest from a JSON string
update_page_element_transform_request_instance = UpdatePageElementTransformRequest.from_json(json)
# print the JSON string representation of the object
print(UpdatePageElementTransformRequest.to_json())

# convert the object into a dict
update_page_element_transform_request_dict = update_page_element_transform_request_instance.to_dict()
# create an instance of UpdatePageElementTransformRequest from a dict
update_page_element_transform_request_from_dict = UpdatePageElementTransformRequest.from_dict(update_page_element_transform_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


