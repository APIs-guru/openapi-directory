# ListHubSpokesResponse

The response for HubService.ListHubSpokes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results. | [optional] 
**spokes** | [**List[Spoke]**](Spoke.md) | The requested spokes. The spoke fields can be partially populated based on the &#x60;view&#x60; field in the request message. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_hub_spokes_response import ListHubSpokesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListHubSpokesResponse from a JSON string
list_hub_spokes_response_instance = ListHubSpokesResponse.from_json(json)
# print the JSON string representation of the object
print(ListHubSpokesResponse.to_json())

# convert the object into a dict
list_hub_spokes_response_dict = list_hub_spokes_response_instance.to_dict()
# create an instance of ListHubSpokesResponse from a dict
list_hub_spokes_response_from_dict = ListHubSpokesResponse.from_dict(list_hub_spokes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


