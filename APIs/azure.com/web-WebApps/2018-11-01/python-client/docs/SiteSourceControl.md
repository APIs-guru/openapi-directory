# SiteSourceControl

Source control configuration for an app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | SiteSourceControl resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.site_source_control import SiteSourceControl

# TODO update the JSON string below
json = "{}"
# create an instance of SiteSourceControl from a JSON string
site_source_control_instance = SiteSourceControl.from_json(json)
# print the JSON string representation of the object
print(SiteSourceControl.to_json())

# convert the object into a dict
site_source_control_dict = site_source_control_instance.to_dict()
# create an instance of SiteSourceControl from a dict
site_source_control_from_dict = SiteSourceControl.from_dict(site_source_control_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


