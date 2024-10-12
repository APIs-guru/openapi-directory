# NamespaceProperties

Properties of the namespace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_acs_namespace** | **bool** | Indicates whether to create an ACS namespace. | [optional] 
**created_at** | **datetime** | The time the namespace was created. | [optional] [readonly] 
**enabled** | **bool** | Specifies whether this instance is enabled. | [optional] 
**provisioning_state** | **str** | Provisioning state of the namespace. | [optional] [readonly] 
**service_bus_endpoint** | **str** | Endpoint you can use to perform Service Bus operations. | [optional] [readonly] 
**status** | **str** | State of the namespace. | [optional] 
**updated_at** | **datetime** | The time the namespace was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.namespace_properties import NamespaceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NamespaceProperties from a JSON string
namespace_properties_instance = NamespaceProperties.from_json(json)
# print the JSON string representation of the object
print(NamespaceProperties.to_json())

# convert the object into a dict
namespace_properties_dict = namespace_properties_instance.to_dict()
# create an instance of NamespaceProperties from a dict
namespace_properties_from_dict = NamespaceProperties.from_dict(namespace_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


