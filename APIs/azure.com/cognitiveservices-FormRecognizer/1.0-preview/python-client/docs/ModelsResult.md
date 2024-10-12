# ModelsResult

Result of query operation to fetch multiple models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**models** | [**List[ModelResult]**](ModelResult.md) | Collection of models. | [optional] 

## Example

```python
from openapi_client.models.models_result import ModelsResult

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsResult from a JSON string
models_result_instance = ModelsResult.from_json(json)
# print the JSON string representation of the object
print(ModelsResult.to_json())

# convert the object into a dict
models_result_dict = models_result_instance.to_dict()
# create an instance of ModelsResult from a dict
models_result_from_dict = ModelsResult.from_dict(models_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


