# AddOrderNotesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notes** | [**List[MarketplaceNote]**](MarketplaceNote.md) | The list of notes to add. | [optional] 

## Example

```python
from openapi_client.models.add_order_notes_request import AddOrderNotesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddOrderNotesRequest from a JSON string
add_order_notes_request_instance = AddOrderNotesRequest.from_json(json)
# print the JSON string representation of the object
print(AddOrderNotesRequest.to_json())

# convert the object into a dict
add_order_notes_request_dict = add_order_notes_request_instance.to_dict()
# create an instance of AddOrderNotesRequest from a dict
add_order_notes_request_from_dict = AddOrderNotesRequest.from_dict(add_order_notes_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


