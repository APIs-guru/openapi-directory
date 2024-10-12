# SiteExtensionInfoCollection

Collection of Kudu site extension information elements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[SiteExtensionInfo]**](SiteExtensionInfo.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.site_extension_info_collection import SiteExtensionInfoCollection

# TODO update the JSON string below
json = "{}"
# create an instance of SiteExtensionInfoCollection from a JSON string
site_extension_info_collection_instance = SiteExtensionInfoCollection.from_json(json)
# print the JSON string representation of the object
print(SiteExtensionInfoCollection.to_json())

# convert the object into a dict
site_extension_info_collection_dict = site_extension_info_collection_instance.to_dict()
# create an instance of SiteExtensionInfoCollection from a dict
site_extension_info_collection_from_dict = SiteExtensionInfoCollection.from_dict(site_extension_info_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


