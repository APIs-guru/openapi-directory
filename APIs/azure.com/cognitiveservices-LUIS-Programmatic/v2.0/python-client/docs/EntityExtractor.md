# EntityExtractor

Entity Extractor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_prebuilt_domain_name** | **str** | The domain name. | [optional] 
**custom_prebuilt_model_name** | **str** | The intent name or entity name. | [optional] 
**id** | **str** | The ID of the Entity Model. | 
**name** | **str** | Name of the Entity Model. | [optional] 
**readable_type** | [**ReadableType**](ReadableType.md) |  | 
**type_id** | **int** | The type ID of the Entity Model. | [optional] 

## Example

```python
from openapi_client.models.entity_extractor import EntityExtractor

# TODO update the JSON string below
json = "{}"
# create an instance of EntityExtractor from a JSON string
entity_extractor_instance = EntityExtractor.from_json(json)
# print the JSON string representation of the object
print(EntityExtractor.to_json())

# convert the object into a dict
entity_extractor_dict = entity_extractor_instance.to_dict()
# create an instance of EntityExtractor from a dict
entity_extractor_from_dict = EntityExtractor.from_dict(entity_extractor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


