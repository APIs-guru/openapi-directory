# PrebuiltEntity

Prebuilt Entity Extractor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**roles** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.prebuilt_entity import PrebuiltEntity

# TODO update the JSON string below
json = "{}"
# create an instance of PrebuiltEntity from a JSON string
prebuilt_entity_instance = PrebuiltEntity.from_json(json)
# print the JSON string representation of the object
print(PrebuiltEntity.to_json())

# convert the object into a dict
prebuilt_entity_dict = prebuilt_entity_instance.to_dict()
# create an instance of PrebuiltEntity from a dict
prebuilt_entity_from_dict = PrebuiltEntity.from_dict(prebuilt_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


