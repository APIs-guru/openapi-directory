# AttributeContext

This message defines the standard attribute vocabulary for Google APIs. An attribute is a piece of metadata that describes an activity on a network service. For example, the size of an HTTP request, or the status code of an HTTP response. Each attribute has a type and a name, which is logically defined as a proto message field in `AttributeContext`. The field type becomes the attribute type, and the field path becomes the attribute name. For example, the attribute `source.ip` maps to field `AttributeContext.source.ip`. This message definition is guaranteed not to have any wire breaking change. So you can use it directly for passing attributes across different systems. NOTE: Different system may generate different subset of attributes. Please verify the system specification before relying on an attribute generated a system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api** | [**Api**](Api.md) |  | [optional] 
**destination** | [**Peer**](Peer.md) |  | [optional] 
**extensions** | **List[Dict[str, object]]** | Supports extensions for advanced use cases, such as logs and metrics. | [optional] 
**origin** | [**Peer**](Peer.md) |  | [optional] 
**request** | [**Request**](Request.md) |  | [optional] 
**resource** | [**Resource**](Resource.md) |  | [optional] 
**response** | [**Response**](Response.md) |  | [optional] 
**source** | [**Peer**](Peer.md) |  | [optional] 

## Example

```python
from openapi_client.models.attribute_context import AttributeContext

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeContext from a JSON string
attribute_context_instance = AttributeContext.from_json(json)
# print the JSON string representation of the object
print(AttributeContext.to_json())

# convert the object into a dict
attribute_context_dict = attribute_context_instance.to_dict()
# create an instance of AttributeContext from a dict
attribute_context_from_dict = AttributeContext.from_dict(attribute_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


