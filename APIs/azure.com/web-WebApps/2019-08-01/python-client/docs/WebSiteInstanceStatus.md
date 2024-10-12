# WebSiteInstanceStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | WebSiteInstanceStatus resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_site_instance_status import WebSiteInstanceStatus

# TODO update the JSON string below
json = "{}"
# create an instance of WebSiteInstanceStatus from a JSON string
web_site_instance_status_instance = WebSiteInstanceStatus.from_json(json)
# print the JSON string representation of the object
print(WebSiteInstanceStatus.to_json())

# convert the object into a dict
web_site_instance_status_dict = web_site_instance_status_instance.to_dict()
# create an instance of WebSiteInstanceStatus from a dict
web_site_instance_status_from_dict = WebSiteInstanceStatus.from_dict(web_site_instance_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


