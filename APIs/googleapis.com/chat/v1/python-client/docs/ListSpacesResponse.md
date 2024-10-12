# ListSpacesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | You can send a token as &#x60;pageToken&#x60; to retrieve the next page of results. If empty, there are no subsequent pages. | [optional] 
**spaces** | [**List[Space]**](Space.md) | List of spaces in the requested (or first) page. | [optional] 

## Example

```python
from openapi_client.models.list_spaces_response import ListSpacesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSpacesResponse from a JSON string
list_spaces_response_instance = ListSpacesResponse.from_json(json)
# print the JSON string representation of the object
print(ListSpacesResponse.to_json())

# convert the object into a dict
list_spaces_response_dict = list_spaces_response_instance.to_dict()
# create an instance of ListSpacesResponse from a dict
list_spaces_response_from_dict = ListSpacesResponse.from_dict(list_spaces_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


