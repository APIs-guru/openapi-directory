# PrebuiltEntityExtractor

Prebuilt Entity Extractor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the Entity Model. | 
**name** | **str** | Name of the Entity Model. | [optional] 
**readable_type** | [**ReadableType**](ReadableType.md) |  | 
**type_id** | **int** | The type ID of the Entity Model. | [optional] 
**roles** | [**List[EntityRole]**](EntityRole.md) | List of Pattern.Any Entity Extractors. | [optional] 

## Example

```python
from openapi_client.models.prebuilt_entity_extractor import PrebuiltEntityExtractor

# TODO update the JSON string below
json = "{}"
# create an instance of PrebuiltEntityExtractor from a JSON string
prebuilt_entity_extractor_instance = PrebuiltEntityExtractor.from_json(json)
# print the JSON string representation of the object
print(PrebuiltEntityExtractor.to_json())

# convert the object into a dict
prebuilt_entity_extractor_dict = prebuilt_entity_extractor_instance.to_dict()
# create an instance of PrebuiltEntityExtractor from a dict
prebuilt_entity_extractor_from_dict = PrebuiltEntityExtractor.from_dict(prebuilt_entity_extractor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


