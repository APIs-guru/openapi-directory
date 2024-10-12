# ScanDefinitionAssetsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criticity** | **str** |  | [optional] 
**datatype** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.scan_definition_assets_inner import ScanDefinitionAssetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ScanDefinitionAssetsInner from a JSON string
scan_definition_assets_inner_instance = ScanDefinitionAssetsInner.from_json(json)
# print the JSON string representation of the object
print(ScanDefinitionAssetsInner.to_json())

# convert the object into a dict
scan_definition_assets_inner_dict = scan_definition_assets_inner_instance.to_dict()
# create an instance of ScanDefinitionAssetsInner from a dict
scan_definition_assets_inner_from_dict = ScanDefinitionAssetsInner.from_dict(scan_definition_assets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


