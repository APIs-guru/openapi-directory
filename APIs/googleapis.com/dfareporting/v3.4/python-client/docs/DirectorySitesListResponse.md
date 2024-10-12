# DirectorySitesListResponse

Directory Site List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directory_sites** | [**List[DirectorySite]**](DirectorySite.md) | Directory site collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#directorySitesListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 

## Example

```python
from openapi_client.models.directory_sites_list_response import DirectorySitesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DirectorySitesListResponse from a JSON string
directory_sites_list_response_instance = DirectorySitesListResponse.from_json(json)
# print the JSON string representation of the object
print(DirectorySitesListResponse.to_json())

# convert the object into a dict
directory_sites_list_response_dict = directory_sites_list_response_instance.to_dict()
# create an instance of DirectorySitesListResponse from a dict
directory_sites_list_response_from_dict = DirectorySitesListResponse.from_dict(directory_sites_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


