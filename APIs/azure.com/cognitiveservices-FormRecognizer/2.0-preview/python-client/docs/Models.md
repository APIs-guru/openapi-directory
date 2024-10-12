# Models

Response to the list custom models operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_list** | [**List[ModelInfo]**](ModelInfo.md) | Collection of trained custom models. | [optional] 
**next_link** | **str** | Link to the next page of custom models. | [optional] 
**summary** | [**ModelsSummary**](ModelsSummary.md) |  | [optional] 

## Example

```python
from openapi_client.models.models import Models

# TODO update the JSON string below
json = "{}"
# create an instance of Models from a JSON string
models_instance = Models.from_json(json)
# print the JSON string representation of the object
print(Models.to_json())

# convert the object into a dict
models_dict = models_instance.to_dict()
# create an instance of Models from a dict
models_from_dict = Models.from_dict(models_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


