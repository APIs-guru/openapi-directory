# GetReactionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** |  | 
**reactions** | [**List[Reaction]**](Reaction.md) | List of reactions | 

## Example

```python
from openapi_client.models.get_reactions_response import GetReactionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetReactionsResponse from a JSON string
get_reactions_response_instance = GetReactionsResponse.from_json(json)
# print the JSON string representation of the object
print(GetReactionsResponse.to_json())

# convert the object into a dict
get_reactions_response_dict = get_reactions_response_instance.to_dict()
# create an instance of GetReactionsResponse from a dict
get_reactions_response_from_dict = GetReactionsResponse.from_dict(get_reactions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


