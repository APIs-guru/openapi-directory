# ScanDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[ScanDefinitionAssetsInner]**](ScanDefinitionAssetsInner.md) |  | [optional] 
**options** | **object** |  | [optional] 
**scan_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.scan_definition import ScanDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ScanDefinition from a JSON string
scan_definition_instance = ScanDefinition.from_json(json)
# print the JSON string representation of the object
print(ScanDefinition.to_json())

# convert the object into a dict
scan_definition_dict = scan_definition_instance.to_dict()
# create an instance of ScanDefinition from a dict
scan_definition_from_dict = ScanDefinition.from_dict(scan_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


