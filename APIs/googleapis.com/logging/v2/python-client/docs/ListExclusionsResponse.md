# ListExclusionsResponse

Result returned from ListExclusions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclusions** | [**List[LogExclusion]**](LogExclusion.md) | A list of exclusions. | [optional] 
**next_page_token** | **str** | If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. | [optional] 

## Example

```python
from openapi_client.models.list_exclusions_response import ListExclusionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListExclusionsResponse from a JSON string
list_exclusions_response_instance = ListExclusionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListExclusionsResponse.to_json())

# convert the object into a dict
list_exclusions_response_dict = list_exclusions_response_instance.to_dict()
# create an instance of ListExclusionsResponse from a dict
list_exclusions_response_from_dict = ListExclusionsResponse.from_dict(list_exclusions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


