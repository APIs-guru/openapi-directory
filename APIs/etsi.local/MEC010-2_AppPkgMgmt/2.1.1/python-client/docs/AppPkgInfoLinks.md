# AppPkgInfoLinks

Links to resources related to this resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_d** | [**LinkType**](LinkType.md) |  | 
**app_pkg_content** | [**LinkType**](LinkType.md) |  | 
**var_self** | [**LinkType**](LinkType.md) |  | 

## Example

```python
from openapi_client.models.app_pkg_info_links import AppPkgInfoLinks

# TODO update the JSON string below
json = "{}"
# create an instance of AppPkgInfoLinks from a JSON string
app_pkg_info_links_instance = AppPkgInfoLinks.from_json(json)
# print the JSON string representation of the object
print(AppPkgInfoLinks.to_json())

# convert the object into a dict
app_pkg_info_links_dict = app_pkg_info_links_instance.to_dict()
# create an instance of AppPkgInfoLinks from a dict
app_pkg_info_links_from_dict = AppPkgInfoLinks.from_dict(app_pkg_info_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


