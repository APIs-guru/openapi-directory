# ListClientStatesResponse

Response message that is returned in LRO result of ListClientStates Operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_states** | [**List[ClientState]**](ClientState.md) | Client states meeting the list restrictions. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results. Empty if there are no more results. | [optional] 

## Example

```python
from openapi_client.models.list_client_states_response import ListClientStatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListClientStatesResponse from a JSON string
list_client_states_response_instance = ListClientStatesResponse.from_json(json)
# print the JSON string representation of the object
print(ListClientStatesResponse.to_json())

# convert the object into a dict
list_client_states_response_dict = list_client_states_response_instance.to_dict()
# create an instance of ListClientStatesResponse from a dict
list_client_states_response_from_dict = ListClientStatesResponse.from_dict(list_client_states_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


