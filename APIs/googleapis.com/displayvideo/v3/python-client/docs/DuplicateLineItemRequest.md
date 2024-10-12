# DuplicateLineItemRequest

Request message for LineItemService.DuplicateLineItem.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_display_name** | **str** | The display name of the new line item. Must be UTF-8 encoded with a maximum size of 240 bytes. | [optional] 

## Example

```python
from openapi_client.models.duplicate_line_item_request import DuplicateLineItemRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DuplicateLineItemRequest from a JSON string
duplicate_line_item_request_instance = DuplicateLineItemRequest.from_json(json)
# print the JSON string representation of the object
print(DuplicateLineItemRequest.to_json())

# convert the object into a dict
duplicate_line_item_request_dict = duplicate_line_item_request_instance.to_dict()
# create an instance of DuplicateLineItemRequest from a dict
duplicate_line_item_request_from_dict = DuplicateLineItemRequest.from_dict(duplicate_line_item_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


