# ListFunctionsResponse

Response for the `ListFunctions` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**functions** | [**List[Function]**](Function.md) | The functions that match the request. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. The response does not include any functions from these locations. | [optional] 

## Example

```python
from openapi_client.models.list_functions_response import ListFunctionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFunctionsResponse from a JSON string
list_functions_response_instance = ListFunctionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListFunctionsResponse.to_json())

# convert the object into a dict
list_functions_response_dict = list_functions_response_instance.to_dict()
# create an instance of ListFunctionsResponse from a dict
list_functions_response_from_dict = ListFunctionsResponse.from_dict(list_functions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


