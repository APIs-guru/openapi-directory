# NodeParametersProperties

Collection of properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_name** | **str** | myhost.domain.com | [optional] 
**gateway_id** | **str** | Gateway ID which will manage this node. | [optional] 
**password** | **str** | Password associated with user name. | [optional] 
**user_name** | **str** | User name to be used to connect to node. | [optional] 

## Example

```python
from openapi_client.models.node_parameters_properties import NodeParametersProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NodeParametersProperties from a JSON string
node_parameters_properties_instance = NodeParametersProperties.from_json(json)
# print the JSON string representation of the object
print(NodeParametersProperties.to_json())

# convert the object into a dict
node_parameters_properties_dict = node_parameters_properties_instance.to_dict()
# create an instance of NodeParametersProperties from a dict
node_parameters_properties_from_dict = NodeParametersProperties.from_dict(node_parameters_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


