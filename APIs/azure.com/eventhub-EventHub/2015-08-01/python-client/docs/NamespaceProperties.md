# NamespaceProperties

Properties of the Namespace supplied for create or update Namespace operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The time the Namespace was created. | [optional] 
**enabled** | **bool** | Specifies whether this instance is enabled. | [optional] 
**metric_id** | **str** | Identifier for Azure Insights metrics | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state of the Namespace. | [optional] 
**service_bus_endpoint** | **str** | Endpoint you can use to perform Service Bus operations. | [optional] 
**status** | **str** | State of the Namespace. | [optional] 
**updated_at** | **datetime** | The time the Namespace was updated. | [optional] 

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


