# SiteConfigResourceCollection

Collection of site configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[SiteConfigResource]**](SiteConfigResource.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.site_config_resource_collection import SiteConfigResourceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of SiteConfigResourceCollection from a JSON string
site_config_resource_collection_instance = SiteConfigResourceCollection.from_json(json)
# print the JSON string representation of the object
print(SiteConfigResourceCollection.to_json())

# convert the object into a dict
site_config_resource_collection_dict = site_config_resource_collection_instance.to_dict()
# create an instance of SiteConfigResourceCollection from a dict
site_config_resource_collection_from_dict = SiteConfigResourceCollection.from_dict(site_config_resource_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


