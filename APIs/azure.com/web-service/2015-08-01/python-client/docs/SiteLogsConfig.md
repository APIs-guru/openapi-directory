# SiteLogsConfig

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
from openapi_client.models.site_logs_config import SiteLogsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SiteLogsConfig from a JSON string
site_logs_config_instance = SiteLogsConfig.from_json(json)
# print the JSON string representation of the object
print(SiteLogsConfig.to_json())

# convert the object into a dict
site_logs_config_dict = site_logs_config_instance.to_dict()
# create an instance of SiteLogsConfig from a dict
site_logs_config_from_dict = SiteLogsConfig.from_dict(site_logs_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


