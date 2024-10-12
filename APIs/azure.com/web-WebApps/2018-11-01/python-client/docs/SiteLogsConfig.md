# SiteLogsConfig

Configuration of App Service site logs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | SiteLogsConfig resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

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


