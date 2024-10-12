# PrivateSourceDefinitionRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**granted** | **bool** |  | 
**source_definition** | [**SourceDefinitionRead**](SourceDefinitionRead.md) |  | 

## Example

```python
from openapi_client.models.private_source_definition_read import PrivateSourceDefinitionRead

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateSourceDefinitionRead from a JSON string
private_source_definition_read_instance = PrivateSourceDefinitionRead.from_json(json)
# print the JSON string representation of the object
print(PrivateSourceDefinitionRead.to_json())

# convert the object into a dict
private_source_definition_read_dict = private_source_definition_read_instance.to_dict()
# create an instance of PrivateSourceDefinitionRead from a dict
private_source_definition_read_from_dict = PrivateSourceDefinitionRead.from_dict(private_source_definition_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


