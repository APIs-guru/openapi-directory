# SBNamespaceUpdateParameters

Description of a namespace resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SBNamespaceProperties**](SBNamespaceProperties.md) |  | [optional] 
**sku** | [**SBSku**](SBSku.md) |  | [optional] 
**location** | **str** | Resource location | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.sb_namespace_update_parameters import SBNamespaceUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SBNamespaceUpdateParameters from a JSON string
sb_namespace_update_parameters_instance = SBNamespaceUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(SBNamespaceUpdateParameters.to_json())

# convert the object into a dict
sb_namespace_update_parameters_dict = sb_namespace_update_parameters_instance.to_dict()
# create an instance of SBNamespaceUpdateParameters from a dict
sb_namespace_update_parameters_from_dict = SBNamespaceUpdateParameters.from_dict(sb_namespace_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


