# ResourceLink

The resource link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The fully qualified ID of the resource link. | [optional] [readonly] 
**name** | **str** | The name of the resource link. | [optional] [readonly] 
**properties** | [**ResourceLinkProperties**](ResourceLinkProperties.md) |  | [optional] 
**type** | **object** | The resource link object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_link import ResourceLink

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceLink from a JSON string
resource_link_instance = ResourceLink.from_json(json)
# print the JSON string representation of the object
print(ResourceLink.to_json())

# convert the object into a dict
resource_link_dict = resource_link_instance.to_dict()
# create an instance of ResourceLink from a dict
resource_link_from_dict = ResourceLink.from_dict(resource_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


