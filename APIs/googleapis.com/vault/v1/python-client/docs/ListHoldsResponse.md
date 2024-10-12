# ListHoldsResponse

The holds for a matter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**holds** | [**List[Hold]**](Hold.md) | The list of holds. | [optional] 
**next_page_token** | **str** | Page token to retrieve the next page of results in the list. If this is empty, then there are no more holds to list. | [optional] 

## Example

```python
from openapi_client.models.list_holds_response import ListHoldsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListHoldsResponse from a JSON string
list_holds_response_instance = ListHoldsResponse.from_json(json)
# print the JSON string representation of the object
print(ListHoldsResponse.to_json())

# convert the object into a dict
list_holds_response_dict = list_holds_response_instance.to_dict()
# create an instance of ListHoldsResponse from a dict
list_holds_response_from_dict = ListHoldsResponse.from_dict(list_holds_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


