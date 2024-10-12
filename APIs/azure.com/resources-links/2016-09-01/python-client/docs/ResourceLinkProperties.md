# ResourceLinkProperties

The resource link properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notes** | **str** | Notes about the resource link. | [optional] 
**source_id** | **str** | The fully qualified ID of the source resource in the link.  | [optional] [readonly] 
**target_id** | **str** | The fully qualified ID of the target resource in the link. | 

## Example

```python
from openapi_client.models.resource_link_properties import ResourceLinkProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceLinkProperties from a JSON string
resource_link_properties_instance = ResourceLinkProperties.from_json(json)
# print the JSON string representation of the object
print(ResourceLinkProperties.to_json())

# convert the object into a dict
resource_link_properties_dict = resource_link_properties_instance.to_dict()
# create an instance of ResourceLinkProperties from a dict
resource_link_properties_from_dict = ResourceLinkProperties.from_dict(resource_link_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


