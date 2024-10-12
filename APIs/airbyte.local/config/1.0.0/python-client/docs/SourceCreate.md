# SourceCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_configuration** | **object** | The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source. | 
**name** | **str** |  | 
**source_definition_id** | **str** |  | 
**workspace_id** | **str** |  | 

## Example

```python
from openapi_client.models.source_create import SourceCreate

# TODO update the JSON string below
json = "{}"
# create an instance of SourceCreate from a JSON string
source_create_instance = SourceCreate.from_json(json)
# print the JSON string representation of the object
print(SourceCreate.to_json())

# convert the object into a dict
source_create_dict = source_create_instance.to_dict()
# create an instance of SourceCreate from a dict
source_create_from_dict = SourceCreate.from_dict(source_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


