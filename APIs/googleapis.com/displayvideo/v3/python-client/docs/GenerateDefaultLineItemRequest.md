# GenerateDefaultLineItemRequest

Request message for LineItemService.GenerateDefaultLineItem.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Required. The display name of the line item. Must be UTF-8 encoded with a maximum size of 240 bytes. | [optional] 
**insertion_order_id** | **str** | Required. The unique ID of the insertion order that the line item belongs to. | [optional] 
**line_item_type** | **str** | Required. The type of the line item. | [optional] 
**mobile_app** | [**MobileApp**](MobileApp.md) |  | [optional] 

## Example

```python
from openapi_client.models.generate_default_line_item_request import GenerateDefaultLineItemRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateDefaultLineItemRequest from a JSON string
generate_default_line_item_request_instance = GenerateDefaultLineItemRequest.from_json(json)
# print the JSON string representation of the object
print(GenerateDefaultLineItemRequest.to_json())

# convert the object into a dict
generate_default_line_item_request_dict = generate_default_line_item_request_instance.to_dict()
# create an instance of GenerateDefaultLineItemRequest from a dict
generate_default_line_item_request_from_dict = GenerateDefaultLineItemRequest.from_dict(generate_default_line_item_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


