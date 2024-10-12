# SitePhpErrorLogFlag

Used for getting PHP error logging flag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | SitePhpErrorLogFlag resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.site_php_error_log_flag import SitePhpErrorLogFlag

# TODO update the JSON string below
json = "{}"
# create an instance of SitePhpErrorLogFlag from a JSON string
site_php_error_log_flag_instance = SitePhpErrorLogFlag.from_json(json)
# print the JSON string representation of the object
print(SitePhpErrorLogFlag.to_json())

# convert the object into a dict
site_php_error_log_flag_dict = site_php_error_log_flag_instance.to_dict()
# create an instance of SitePhpErrorLogFlag from a dict
site_php_error_log_flag_from_dict = SitePhpErrorLogFlag.from_dict(site_php_error_log_flag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


