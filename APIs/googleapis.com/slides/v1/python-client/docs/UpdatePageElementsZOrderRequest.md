# UpdatePageElementsZOrderRequest

Updates the Z-order of page elements. Z-order is an ordering of the elements on the page from back to front. The page element in the front may cover the elements that are behind it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **str** | The Z-order operation to apply on the page elements. When applying the operation on multiple page elements, the relative Z-orders within these page elements before the operation is maintained. | [optional] 
**page_element_object_ids** | **List[str]** | The object IDs of the page elements to update. All the page elements must be on the same page and must not be grouped. | [optional] 

## Example

```python
from openapi_client.models.update_page_elements_z_order_request import UpdatePageElementsZOrderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePageElementsZOrderRequest from a JSON string
update_page_elements_z_order_request_instance = UpdatePageElementsZOrderRequest.from_json(json)
# print the JSON string representation of the object
print(UpdatePageElementsZOrderRequest.to_json())

# convert the object into a dict
update_page_elements_z_order_request_dict = update_page_elements_z_order_request_instance.to_dict()
# create an instance of UpdatePageElementsZOrderRequest from a dict
update_page_elements_z_order_request_from_dict = UpdatePageElementsZOrderRequest.from_dict(update_page_elements_z_order_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


