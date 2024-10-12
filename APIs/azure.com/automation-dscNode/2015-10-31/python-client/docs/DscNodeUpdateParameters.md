# DscNodeUpdateParameters

The parameters supplied to the update dsc node operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_configuration** | [**DscNodeConfigurationAssociationProperty**](DscNodeConfigurationAssociationProperty.md) |  | [optional] 
**node_id** | **str** | Gets or sets the id of the dsc node. | [optional] 

## Example

```python
from openapi_client.models.dsc_node_update_parameters import DscNodeUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DscNodeUpdateParameters from a JSON string
dsc_node_update_parameters_instance = DscNodeUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(DscNodeUpdateParameters.to_json())

# convert the object into a dict
dsc_node_update_parameters_dict = dsc_node_update_parameters_instance.to_dict()
# create an instance of DscNodeUpdateParameters from a dict
dsc_node_update_parameters_from_dict = DscNodeUpdateParameters.from_dict(dsc_node_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


