# SiteConfig

A `SiteConfig` contains metadata associated with a specific site that controls Firebase Hosting serving behavior

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_logging_enabled** | **bool** | Whether or not web requests made by site visitors are logged via Cloud Logging. | [optional] 
**max_versions** | **str** | The number of FINALIZED versions that will be held for a site before automatic deletion. When a new version is deployed, content for versions in storage in excess of this number will be deleted, and will no longer be billed for storage usage. Oldest versions will be deleted first; sites are created with an unlimited number of max_versions by default. | [optional] 

## Example

```python
from openapi_client.models.site_config import SiteConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SiteConfig from a JSON string
site_config_instance = SiteConfig.from_json(json)
# print the JSON string representation of the object
print(SiteConfig.to_json())

# convert the object into a dict
site_config_dict = site_config_instance.to_dict()
# create an instance of SiteConfig from a dict
site_config_from_dict = SiteConfig.from_dict(site_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


