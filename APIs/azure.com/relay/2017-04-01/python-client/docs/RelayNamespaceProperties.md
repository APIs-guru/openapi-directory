# RelayNamespaceProperties

Properties of the namespace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The time the namespace was created. | [optional] [readonly] 
**metric_id** | **str** | Identifier for Azure Insights metrics. | [optional] [readonly] 
**provisioning_state** | **str** |  | [optional] [readonly] 
**service_bus_endpoint** | **str** | Endpoint you can use to perform Service Bus operations. | [optional] [readonly] 
**updated_at** | **datetime** | The time the namespace was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.relay_namespace_properties import RelayNamespaceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RelayNamespaceProperties from a JSON string
relay_namespace_properties_instance = RelayNamespaceProperties.from_json(json)
# print the JSON string representation of the object
print(RelayNamespaceProperties.to_json())

# convert the object into a dict
relay_namespace_properties_dict = relay_namespace_properties_instance.to_dict()
# create an instance of RelayNamespaceProperties from a dict
relay_namespace_properties_from_dict = RelayNamespaceProperties.from_dict(relay_namespace_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


