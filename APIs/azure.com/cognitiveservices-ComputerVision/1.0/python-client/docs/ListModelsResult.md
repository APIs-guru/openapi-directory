# ListModelsResult

Result of the List Domain Models operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**models** | [**List[ModelDescription]**](ModelDescription.md) | An array of supported models. | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_models_result import ListModelsResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListModelsResult from a JSON string
list_models_result_instance = ListModelsResult.from_json(json)
# print the JSON string representation of the object
print(ListModelsResult.to_json())

# convert the object into a dict
list_models_result_dict = list_models_result_instance.to_dict()
# create an instance of ListModelsResult from a dict
list_models_result_from_dict = ListModelsResult.from_dict(list_models_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


