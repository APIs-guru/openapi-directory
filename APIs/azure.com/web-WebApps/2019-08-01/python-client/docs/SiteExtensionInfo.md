# SiteExtensionInfo

Site Extension Information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | SiteExtensionInfo resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.site_extension_info import SiteExtensionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SiteExtensionInfo from a JSON string
site_extension_info_instance = SiteExtensionInfo.from_json(json)
# print the JSON string representation of the object
print(SiteExtensionInfo.to_json())

# convert the object into a dict
site_extension_info_dict = site_extension_info_instance.to_dict()
# create an instance of SiteExtensionInfo from a dict
site_extension_info_from_dict = SiteExtensionInfo.from_dict(site_extension_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


