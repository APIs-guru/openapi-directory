# AddOrderNotesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notes** | [**List[MarketplaceNote]**](MarketplaceNote.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_order_notes_response import AddOrderNotesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddOrderNotesResponse from a JSON string
add_order_notes_response_instance = AddOrderNotesResponse.from_json(json)
# print the JSON string representation of the object
print(AddOrderNotesResponse.to_json())

# convert the object into a dict
add_order_notes_response_dict = add_order_notes_response_instance.to_dict()
# create an instance of AddOrderNotesResponse from a dict
add_order_notes_response_from_dict = AddOrderNotesResponse.from_dict(add_order_notes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


