# ListAccessLevelsResponse

A response to `ListAccessLevelsRequest`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_levels** | [**List[AccessLevel]**](AccessLevel.md) | List of the Access Level instances. | [optional] 
**next_page_token** | **str** | The pagination token to retrieve the next page of results. If the value is empty, no further results remain. | [optional] 

## Example

```python
from openapi_client.models.list_access_levels_response import ListAccessLevelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAccessLevelsResponse from a JSON string
list_access_levels_response_instance = ListAccessLevelsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAccessLevelsResponse.to_json())

# convert the object into a dict
list_access_levels_response_dict = list_access_levels_response_instance.to_dict()
# create an instance of ListAccessLevelsResponse from a dict
list_access_levels_response_from_dict = ListAccessLevelsResponse.from_dict(list_access_levels_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


