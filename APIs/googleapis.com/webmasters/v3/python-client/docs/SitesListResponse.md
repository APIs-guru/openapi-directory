# SitesListResponse

List of sites with access level information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**site_entry** | [**List[WmxSite]**](WmxSite.md) | Contains permission level information about a Search Console site. For more information, see Permissions in Search Console. | [optional] 

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


