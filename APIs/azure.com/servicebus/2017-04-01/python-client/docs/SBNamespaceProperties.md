# SBNamespaceProperties

Properties of the namespace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The time the namespace was created. | [optional] [readonly] 
**metric_id** | **str** | Identifier for Azure Insights metrics | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state of the namespace. | [optional] [readonly] 
**service_bus_endpoint** | **str** | Endpoint you can use to perform Service Bus operations. | [optional] [readonly] 
**updated_at** | **datetime** | The time the namespace was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sb_namespace_properties import SBNamespaceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SBNamespaceProperties from a JSON string
sb_namespace_properties_instance = SBNamespaceProperties.from_json(json)
# print the JSON string representation of the object
print(SBNamespaceProperties.to_json())

# convert the object into a dict
sb_namespace_properties_dict = sb_namespace_properties_instance.to_dict()
# create an instance of SBNamespaceProperties from a dict
sb_namespace_properties_from_dict = SBNamespaceProperties.from_dict(sb_namespace_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


