# ListHubsResponse

Response for HubService.ListHubs method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hubs** | [**List[Hub]**](Hub.md) | Hubs to be returned. | [optional] 
**next_page_token** | **str** | The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_hubs_response import ListHubsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListHubsResponse from a JSON string
list_hubs_response_instance = ListHubsResponse.from_json(json)
# print the JSON string representation of the object
print(ListHubsResponse.to_json())

# convert the object into a dict
list_hubs_response_dict = list_hubs_response_instance.to_dict()
# create an instance of ListHubsResponse from a dict
list_hubs_response_from_dict = ListHubsResponse.from_dict(list_hubs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


