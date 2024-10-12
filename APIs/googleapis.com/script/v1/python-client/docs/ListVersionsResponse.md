# ListVersionsResponse

Response with the list of the versions for the specified script project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The token use to fetch the next page of records. if not exist in the response, that means no more versions to list. | [optional] 
**versions** | [**List[Version]**](Version.md) | The list of versions. | [optional] 

## Example

```python
from openapi_client.models.list_versions_response import ListVersionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListVersionsResponse from a JSON string
list_versions_response_instance = ListVersionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListVersionsResponse.to_json())

# convert the object into a dict
list_versions_response_dict = list_versions_response_instance.to_dict()
# create an instance of ListVersionsResponse from a dict
list_versions_response_from_dict = ListVersionsResponse.from_dict(list_versions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


