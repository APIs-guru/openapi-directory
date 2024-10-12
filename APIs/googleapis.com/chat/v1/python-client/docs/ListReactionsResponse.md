# ListReactionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Continuation token to retrieve the next page of results. It&#39;s empty for the last page of results. | [optional] 
**reactions** | [**List[Reaction]**](Reaction.md) | List of reactions in the requested (or first) page. | [optional] 

## Example

```python
from openapi_client.models.list_reactions_response import ListReactionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListReactionsResponse from a JSON string
list_reactions_response_instance = ListReactionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListReactionsResponse.to_json())

# convert the object into a dict
list_reactions_response_dict = list_reactions_response_instance.to_dict()
# create an instance of ListReactionsResponse from a dict
list_reactions_response_from_dict = ListReactionsResponse.from_dict(list_reactions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


