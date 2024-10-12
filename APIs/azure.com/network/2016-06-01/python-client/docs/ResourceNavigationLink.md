# ResourceNavigationLink

ResourceNavigationLink resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated | [optional] [readonly] 
**name** | **str** | Name of the resource that is unique within a resource group. This name can be used to access the resource | [optional] 
**properties** | [**ResourceNavigationLinkFormat**](ResourceNavigationLinkFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.resource_navigation_link import ResourceNavigationLink

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceNavigationLink from a JSON string
resource_navigation_link_instance = ResourceNavigationLink.from_json(json)
# print the JSON string representation of the object
print(ResourceNavigationLink.to_json())

# convert the object into a dict
resource_navigation_link_dict = resource_navigation_link_instance.to_dict()
# create an instance of ResourceNavigationLink from a dict
resource_navigation_link_from_dict = ResourceNavigationLink.from_dict(resource_navigation_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


