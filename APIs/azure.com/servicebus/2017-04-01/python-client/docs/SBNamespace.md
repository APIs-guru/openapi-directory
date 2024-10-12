# SBNamespace

Description of a namespace resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SBNamespaceProperties**](SBNamespaceProperties.md) |  | [optional] 
**sku** | [**SBSku**](SBSku.md) |  | [optional] 
**location** | **str** | The Geo-location where the resource lives | 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.sb_namespace import SBNamespace

# TODO update the JSON string below
json = "{}"
# create an instance of SBNamespace from a JSON string
sb_namespace_instance = SBNamespace.from_json(json)
# print the JSON string representation of the object
print(SBNamespace.to_json())

# convert the object into a dict
sb_namespace_dict = sb_namespace_instance.to_dict()
# create an instance of SBNamespace from a dict
sb_namespace_from_dict = SBNamespace.from_dict(sb_namespace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


