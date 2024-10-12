# SiteConfig

Configuration of Azure web site

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

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


