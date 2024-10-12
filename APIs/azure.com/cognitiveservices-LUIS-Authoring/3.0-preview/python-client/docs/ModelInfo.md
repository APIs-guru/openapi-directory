# ModelInfo

Base type used in entity types.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the Entity Model. | 
**name** | **str** | Name of the Entity Model. | [optional] 
**readable_type** | [**ReadableType**](ReadableType.md) |  | 
**type_id** | **int** | The type ID of the Entity Model. | [optional] 

## Example

```python
from openapi_client.models.model_info import ModelInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ModelInfo from a JSON string
model_info_instance = ModelInfo.from_json(json)
# print the JSON string representation of the object
print(ModelInfo.to_json())

# convert the object into a dict
model_info_dict = model_info_instance.to_dict()
# create an instance of ModelInfo from a dict
model_info_from_dict = ModelInfo.from_dict(model_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


