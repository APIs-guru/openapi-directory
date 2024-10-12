# SitemapsListResponse

List of sitemaps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sitemap** | [**List[WmxSitemap]**](WmxSitemap.md) | Contains detailed information about a specific URL submitted as a sitemap. | [optional] 

## Example

```python
from openapi_client.models.sitemaps_list_response import SitemapsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SitemapsListResponse from a JSON string
sitemaps_list_response_instance = SitemapsListResponse.from_json(json)
# print the JSON string representation of the object
print(SitemapsListResponse.to_json())

# convert the object into a dict
sitemaps_list_response_dict = sitemaps_list_response_instance.to_dict()
# create an instance of SitemapsListResponse from a dict
sitemaps_list_response_from_dict = SitemapsListResponse.from_dict(sitemaps_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


