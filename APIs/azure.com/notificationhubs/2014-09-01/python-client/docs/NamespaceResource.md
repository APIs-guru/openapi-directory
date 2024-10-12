# NamespaceResource

Description of a Namespace resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Gets or sets the id of the created Namespace. | [optional] 
**location** | **str** | Gets or sets datacenter location of the Namespace. | [optional] 
**name** | **str** | Gets or sets name of the Namespace. | [optional] 
**properties** | [**NamespaceProperties**](NamespaceProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Gets or sets tags of the Namespace. | [optional] 
**type** | **str** | Gets or sets resource type of the Namespace. | [optional] 

## Example

```python
from openapi_client.models.namespace_resource import NamespaceResource

# TODO update the JSON string below
json = "{}"
# create an instance of NamespaceResource from a JSON string
namespace_resource_instance = NamespaceResource.from_json(json)
# print the JSON string representation of the object
print(NamespaceResource.to_json())

# convert the object into a dict
namespace_resource_dict = namespace_resource_instance.to_dict()
# create an instance of NamespaceResource from a dict
namespace_resource_from_dict = NamespaceResource.from_dict(namespace_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


