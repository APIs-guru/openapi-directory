# GetOrderNotesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notes** | [**List[MarketplaceNote]**](MarketplaceNote.md) | The list of matching notes. The notes for a proposal are ordered from oldest to newest. If the notes span multiple proposals, they will be grouped by proposal, with the notes for the most recently modified proposal appearing first. | [optional] 

## Example

```python
from openapi_client.models.get_order_notes_response import GetOrderNotesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrderNotesResponse from a JSON string
get_order_notes_response_instance = GetOrderNotesResponse.from_json(json)
# print the JSON string representation of the object
print(GetOrderNotesResponse.to_json())

# convert the object into a dict
get_order_notes_response_dict = get_order_notes_response_instance.to_dict()
# create an instance of GetOrderNotesResponse from a dict
get_order_notes_response_from_dict = GetOrderNotesResponse.from_dict(get_order_notes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


