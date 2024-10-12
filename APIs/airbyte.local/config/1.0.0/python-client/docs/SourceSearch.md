# SourceSearch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_configuration** | **object** | The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source. | [optional] 
**name** | **str** |  | [optional] 
**source_definition_id** | **str** |  | [optional] 
**source_id** | **str** |  | [optional] 
**source_name** | **str** |  | [optional] 
**workspace_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.source_search import SourceSearch

# TODO update the JSON string below
json = "{}"
# create an instance of SourceSearch from a JSON string
source_search_instance = SourceSearch.from_json(json)
# print the JSON string representation of the object
print(SourceSearch.to_json())

# convert the object into a dict
source_search_dict = source_search_instance.to_dict()
# create an instance of SourceSearch from a dict
source_search_from_dict = SourceSearch.from_dict(source_search_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


