# ListPlaceActionLinksResponse

Response message for PlaceActions.ListPlaceActionLinks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If there are more place action links than the requested page size, then this field is populated with a token to fetch the next page of results. | [optional] 
**place_action_links** | [**List[PlaceActionLink]**](PlaceActionLink.md) | The returned list of place action links. | [optional] 

## Example

```python
from openapi_client.models.list_place_action_links_response import ListPlaceActionLinksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPlaceActionLinksResponse from a JSON string
list_place_action_links_response_instance = ListPlaceActionLinksResponse.from_json(json)
# print the JSON string representation of the object
print(ListPlaceActionLinksResponse.to_json())

# convert the object into a dict
list_place_action_links_response_dict = list_place_action_links_response_instance.to_dict()
# create an instance of ListPlaceActionLinksResponse from a dict
list_place_action_links_response_from_dict = ListPlaceActionLinksResponse.from_dict(list_place_action_links_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


