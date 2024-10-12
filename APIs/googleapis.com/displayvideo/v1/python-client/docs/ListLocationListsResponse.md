# ListLocationListsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_lists** | [**List[LocationList]**](LocationList.md) | The list of location lists. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListLocationLists&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_location_lists_response import ListLocationListsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListLocationListsResponse from a JSON string
list_location_lists_response_instance = ListLocationListsResponse.from_json(json)
# print the JSON string representation of the object
print(ListLocationListsResponse.to_json())

# convert the object into a dict
list_location_lists_response_dict = list_location_lists_response_instance.to_dict()
# create an instance of ListLocationListsResponse from a dict
list_location_lists_response_from_dict = ListLocationListsResponse.from_dict(list_location_lists_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


