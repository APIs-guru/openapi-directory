# ListSpokesResponse

The response for HubService.ListSpokes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. | [optional] 
**spokes** | [**List[Spoke]**](Spoke.md) | Spokes to be returned. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_spokes_response import ListSpokesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSpokesResponse from a JSON string
list_spokes_response_instance = ListSpokesResponse.from_json(json)
# print the JSON string representation of the object
print(ListSpokesResponse.to_json())

# convert the object into a dict
list_spokes_response_dict = list_spokes_response_instance.to_dict()
# create an instance of ListSpokesResponse from a dict
list_spokes_response_from_dict = ListSpokesResponse.from_dict(list_spokes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


