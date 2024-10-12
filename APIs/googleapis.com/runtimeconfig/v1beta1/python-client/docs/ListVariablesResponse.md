# ListVariablesResponse

Response for the `ListVariables()` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | This token allows you to get the next page of results for list requests. If the number of results is larger than &#x60;pageSize&#x60;, use the &#x60;nextPageToken&#x60; as a value for the query parameter &#x60;pageToken&#x60; in the next list request. Subsequent list requests will have their own &#x60;nextPageToken&#x60; to continue paging through the results | [optional] 
**variables** | [**List[Variable]**](Variable.md) | A list of variables and their values. The order of returned variable objects is arbitrary. | [optional] 

## Example

```python
from openapi_client.models.list_variables_response import ListVariablesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListVariablesResponse from a JSON string
list_variables_response_instance = ListVariablesResponse.from_json(json)
# print the JSON string representation of the object
print(ListVariablesResponse.to_json())

# convert the object into a dict
list_variables_response_dict = list_variables_response_instance.to_dict()
# create an instance of ListVariablesResponse from a dict
list_variables_response_from_dict = ListVariablesResponse.from_dict(list_variables_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


