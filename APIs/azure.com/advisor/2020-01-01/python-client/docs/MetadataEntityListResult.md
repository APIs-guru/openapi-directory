# MetadataEntityListResult

The list of metadata entities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link used to get the next page of metadata. | [optional] 
**value** | [**List[MetadataEntity]**](MetadataEntity.md) | The list of metadata entities. | [optional] 

## Example

```python
from openapi_client.models.metadata_entity_list_result import MetadataEntityListResult

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataEntityListResult from a JSON string
metadata_entity_list_result_instance = MetadataEntityListResult.from_json(json)
# print the JSON string representation of the object
print(MetadataEntityListResult.to_json())

# convert the object into a dict
metadata_entity_list_result_dict = metadata_entity_list_result_instance.to_dict()
# create an instance of MetadataEntityListResult from a dict
metadata_entity_list_result_from_dict = MetadataEntityListResult.from_dict(metadata_entity_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


