# EntityModelInfo

An Entity Extractor model info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roles** | [**List[EntityRole]**](EntityRole.md) | List of Pattern.Any Entity Extractors. | [optional] 
**id** | **str** | The ID of the Entity Model. | 
**name** | **str** | Name of the Entity Model. | [optional] 
**readable_type** | [**ReadableType**](ReadableType.md) |  | 
**type_id** | **int** | The type ID of the Entity Model. | [optional] 

## Example

```python
from openapi_client.models.entity_model_info import EntityModelInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EntityModelInfo from a JSON string
entity_model_info_instance = EntityModelInfo.from_json(json)
# print the JSON string representation of the object
print(EntityModelInfo.to_json())

# convert the object into a dict
entity_model_info_dict = entity_model_info_instance.to_dict()
# create an instance of EntityModelInfo from a dict
entity_model_info_from_dict = EntityModelInfo.from_dict(entity_model_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


