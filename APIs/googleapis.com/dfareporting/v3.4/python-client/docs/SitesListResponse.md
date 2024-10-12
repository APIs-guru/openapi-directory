# SitesListResponse

Site List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#sitesListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 
**sites** | [**List[Site]**](Site.md) | Site collection. | [optional] 

## Example

```python
from openapi_client.models.sites_list_response import SitesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SitesListResponse from a JSON string
sites_list_response_instance = SitesListResponse.from_json(json)
# print the JSON string representation of the object
print(SitesListResponse.to_json())

# convert the object into a dict
sites_list_response_dict = sites_list_response_instance.to_dict()
# create an instance of SitesListResponse from a dict
sites_list_response_from_dict = SitesListResponse.from_dict(sites_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


