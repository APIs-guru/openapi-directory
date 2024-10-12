# NodeParameters

Parameter collection for operations on arm node resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Location of the resource. | [optional] 
**properties** | [**NodeParametersProperties**](NodeParametersProperties.md) |  | [optional] 
**tags** | **object** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.node_parameters import NodeParameters

# TODO update the JSON string below
json = "{}"
# create an instance of NodeParameters from a JSON string
node_parameters_instance = NodeParameters.from_json(json)
# print the JSON string representation of the object
print(NodeParameters.to_json())

# convert the object into a dict
node_parameters_dict = node_parameters_instance.to_dict()
# create an instance of NodeParameters from a dict
node_parameters_from_dict = NodeParameters.from_dict(node_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


