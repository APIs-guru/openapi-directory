# ListAvailableVersionsResponse

Response message for the list available versions request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_versions** | [**List[Version]**](Version.md) | Represents a list of versions that are supported. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.list_available_versions_response import ListAvailableVersionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAvailableVersionsResponse from a JSON string
list_available_versions_response_instance = ListAvailableVersionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAvailableVersionsResponse.to_json())

# convert the object into a dict
list_available_versions_response_dict = list_available_versions_response_instance.to_dict()
# create an instance of ListAvailableVersionsResponse from a dict
list_available_versions_response_from_dict = ListAvailableVersionsResponse.from_dict(list_available_versions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


