# ErrorGroupModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_count** | **int** | count of errors in a model | [optional] 
**model_code** | **str** | model code | [optional] 
**model_name** | **str** | model name | [optional] 

## Example

```python
from openapi_client.models.error_group_model import ErrorGroupModel

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorGroupModel from a JSON string
error_group_model_instance = ErrorGroupModel.from_json(json)
# print the JSON string representation of the object
print(ErrorGroupModel.to_json())

# convert the object into a dict
error_group_model_dict = error_group_model_instance.to_dict()
# create an instance of ErrorGroupModel from a dict
error_group_model_from_dict = ErrorGroupModel.from_dict(error_group_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


