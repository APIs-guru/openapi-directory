# SourceRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_configuration** | **object** | The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source. | 
**icon** | **str** |  | [optional] 
**name** | **str** |  | 
**source_definition_id** | **str** |  | 
**source_id** | **str** |  | 
**source_name** | **str** |  | 
**workspace_id** | **str** |  | 

## Example

```python
from openapi_client.models.source_read import SourceRead

# TODO update the JSON string below
json = "{}"
# create an instance of SourceRead from a JSON string
source_read_instance = SourceRead.from_json(json)
# print the JSON string representation of the object
print(SourceRead.to_json())

# convert the object into a dict
source_read_dict = source_read_instance.to_dict()
# create an instance of SourceRead from a dict
source_read_from_dict = SourceRead.from_dict(source_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


