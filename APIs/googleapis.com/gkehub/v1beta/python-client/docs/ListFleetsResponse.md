# ListFleetsResponse

Response message for the `GkeHub.ListFleetsResponse` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fleets** | [**List[Fleet]**](Fleet.md) | The list of matching fleets. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. The token is only valid for 1h. | [optional] 

## Example

```python
from openapi_client.models.list_fleets_response import ListFleetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFleetsResponse from a JSON string
list_fleets_response_instance = ListFleetsResponse.from_json(json)
# print the JSON string representation of the object
print(ListFleetsResponse.to_json())

# convert the object into a dict
list_fleets_response_dict = list_fleets_response_instance.to_dict()
# create an instance of ListFleetsResponse from a dict
list_fleets_response_from_dict = ListFleetsResponse.from_dict(list_fleets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


