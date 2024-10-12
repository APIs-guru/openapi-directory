# ErrorGroupModels


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_count** | **int** |  | [optional] 
**models** | [**List[ErrorsGroupModelCounts200ResponseModelsInner]**](ErrorsGroupModelCounts200ResponseModelsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.error_group_models import ErrorGroupModels

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorGroupModels from a JSON string
error_group_models_instance = ErrorGroupModels.from_json(json)
# print the JSON string representation of the object
print(ErrorGroupModels.to_json())

# convert the object into a dict
error_group_models_dict = error_group_models_instance.to_dict()
# create an instance of ErrorGroupModels from a dict
error_group_models_from_dict = ErrorGroupModels.from_dict(error_group_models_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


