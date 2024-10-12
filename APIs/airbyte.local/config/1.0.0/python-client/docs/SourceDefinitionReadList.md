# SourceDefinitionReadList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_definitions** | [**List[SourceDefinitionRead]**](SourceDefinitionRead.md) |  | 

## Example

```python
from openapi_client.models.source_definition_read_list import SourceDefinitionReadList

# TODO update the JSON string below
json = "{}"
# create an instance of SourceDefinitionReadList from a JSON string
source_definition_read_list_instance = SourceDefinitionReadList.from_json(json)
# print the JSON string representation of the object
print(SourceDefinitionReadList.to_json())

# convert the object into a dict
source_definition_read_list_dict = source_definition_read_list_instance.to_dict()
# create an instance of SourceDefinitionReadList from a dict
source_definition_read_list_from_dict = SourceDefinitionReadList.from_dict(source_definition_read_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


