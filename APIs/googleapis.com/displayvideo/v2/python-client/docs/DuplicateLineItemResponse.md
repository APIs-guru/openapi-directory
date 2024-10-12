# DuplicateLineItemResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duplicate_line_item_id** | **str** | The ID of the created line item. | [optional] 

## Example

```python
from openapi_client.models.duplicate_line_item_response import DuplicateLineItemResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DuplicateLineItemResponse from a JSON string
duplicate_line_item_response_instance = DuplicateLineItemResponse.from_json(json)
# print the JSON string representation of the object
print(DuplicateLineItemResponse.to_json())

# convert the object into a dict
duplicate_line_item_response_dict = duplicate_line_item_response_instance.to_dict()
# create an instance of DuplicateLineItemResponse from a dict
duplicate_line_item_response_from_dict = DuplicateLineItemResponse.from_dict(duplicate_line_item_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


