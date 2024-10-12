# UsageModel

A usage model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**UsageModelDisplay**](UsageModelDisplay.md) |  | [optional] 
**model_name** | **str** | Non-localized keyword name for this usage model. | [optional] 
**target_type** | **str** | The type of Storage Target to which this model is applicable (only nfs3 as of this version). | [optional] 

## Example

```python
from openapi_client.models.usage_model import UsageModel

# TODO update the JSON string below
json = "{}"
# create an instance of UsageModel from a JSON string
usage_model_instance = UsageModel.from_json(json)
# print the JSON string representation of the object
print(UsageModel.to_json())

# convert the object into a dict
usage_model_dict = usage_model_instance.to_dict()
# create an instance of UsageModel from a dict
usage_model_from_dict = UsageModel.from_dict(usage_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


