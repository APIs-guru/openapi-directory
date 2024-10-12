# RecallActionParameters

The parameters used when calling recall action on server endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pattern** | **str** | Pattern of the files. | [optional] 
**recall_path** | **str** | Recall path. | [optional] 

## Example

```python
from openapi_client.models.recall_action_parameters import RecallActionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RecallActionParameters from a JSON string
recall_action_parameters_instance = RecallActionParameters.from_json(json)
# print the JSON string representation of the object
print(RecallActionParameters.to_json())

# convert the object into a dict
recall_action_parameters_dict = recall_action_parameters_instance.to_dict()
# create an instance of RecallActionParameters from a dict
recall_action_parameters_from_dict = RecallActionParameters.from_dict(recall_action_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


