# SiteInstance

Instance of an app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | SiteInstance resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.site_instance import SiteInstance

# TODO update the JSON string below
json = "{}"
# create an instance of SiteInstance from a JSON string
site_instance_instance = SiteInstance.from_json(json)
# print the JSON string representation of the object
print(SiteInstance.to_json())

# convert the object into a dict
site_instance_dict = site_instance_instance.to_dict()
# create an instance of SiteInstance from a dict
site_instance_from_dict = SiteInstance.from_dict(site_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


