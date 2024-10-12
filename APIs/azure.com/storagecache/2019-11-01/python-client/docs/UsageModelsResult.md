# UsageModelsResult

A list of Cache usage models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of Cache usage models. | [optional] 
**value** | [**List[UsageModel]**](UsageModel.md) | The list of usage models available for the subscription. | [optional] 

## Example

```python
from openapi_client.models.usage_models_result import UsageModelsResult

# TODO update the JSON string below
json = "{}"
# create an instance of UsageModelsResult from a JSON string
usage_models_result_instance = UsageModelsResult.from_json(json)
# print the JSON string representation of the object
print(UsageModelsResult.to_json())

# convert the object into a dict
usage_models_result_dict = usage_models_result_instance.to_dict()
# create an instance of UsageModelsResult from a dict
usage_models_result_from_dict = UsageModelsResult.from_dict(usage_models_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


