# UpdateItemRequest

Update an item in a form.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item** | [**Item**](Item.md) |  | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 
**update_mask** | **str** | Required. Only values named in this mask are changed. | [optional] 

## Example

```python
from openapi_client.models.update_item_request import UpdateItemRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateItemRequest from a JSON string
update_item_request_instance = UpdateItemRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateItemRequest.to_json())

# convert the object into a dict
update_item_request_dict = update_item_request_instance.to_dict()
# create an instance of UpdateItemRequest from a dict
update_item_request_from_dict = UpdateItemRequest.from_dict(update_item_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


