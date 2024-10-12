# PrivateSourceDefinitionReadList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_definitions** | [**List[PrivateSourceDefinitionRead]**](PrivateSourceDefinitionRead.md) |  | 

## Example

```python
from openapi_client.models.private_source_definition_read_list import PrivateSourceDefinitionReadList

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateSourceDefinitionReadList from a JSON string
private_source_definition_read_list_instance = PrivateSourceDefinitionReadList.from_json(json)
# print the JSON string representation of the object
print(PrivateSourceDefinitionReadList.to_json())

# convert the object into a dict
private_source_definition_read_list_dict = private_source_definition_read_list_instance.to_dict()
# create an instance of PrivateSourceDefinitionReadList from a dict
private_source_definition_read_list_from_dict = PrivateSourceDefinitionReadList.from_dict(private_source_definition_read_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


