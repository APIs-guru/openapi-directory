# NDepthEntityExtractor

N-Depth Entity Extractor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**List[ChildEntity]**](ChildEntity.md) |  | [optional] 
**custom_prebuilt_domain_name** | **str** | The domain name. | [optional] 
**custom_prebuilt_model_name** | **str** | The intent name or entity name. | [optional] 
**id** | **str** | The ID of the Entity Model. | 
**name** | **str** | Name of the Entity Model. | [optional] 
**readable_type** | [**ReadableType**](ReadableType.md) |  | 
**type_id** | **int** | The type ID of the Entity Model. | [optional] 
**roles** | [**List[EntityRole]**](EntityRole.md) | List of Pattern.Any Entity Extractors. | [optional] 

## Example

```python
from openapi_client.models.n_depth_entity_extractor import NDepthEntityExtractor

# TODO update the JSON string below
json = "{}"
# create an instance of NDepthEntityExtractor from a JSON string
n_depth_entity_extractor_instance = NDepthEntityExtractor.from_json(json)
# print the JSON string representation of the object
print(NDepthEntityExtractor.to_json())

# convert the object into a dict
n_depth_entity_extractor_dict = n_depth_entity_extractor_instance.to_dict()
# create an instance of NDepthEntityExtractor from a dict
n_depth_entity_extractor_from_dict = NDepthEntityExtractor.from_dict(n_depth_entity_extractor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


