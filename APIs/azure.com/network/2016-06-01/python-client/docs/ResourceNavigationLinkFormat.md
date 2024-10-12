# ResourceNavigationLinkFormat

Properties of ResourceNavigationLink

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link** | **str** | Link to the external resource | [optional] 
**linked_resource_type** | **str** | Resource type of the linked resource | [optional] 
**provisioning_state** | **str** | Provisioning state of the ResourceNavigationLink resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_navigation_link_format import ResourceNavigationLinkFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceNavigationLinkFormat from a JSON string
resource_navigation_link_format_instance = ResourceNavigationLinkFormat.from_json(json)
# print the JSON string representation of the object
print(ResourceNavigationLinkFormat.to_json())

# convert the object into a dict
resource_navigation_link_format_dict = resource_navigation_link_format_instance.to_dict()
# create an instance of ResourceNavigationLinkFormat from a dict
resource_navigation_link_format_from_dict = ResourceNavigationLinkFormat.from_dict(resource_navigation_link_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


