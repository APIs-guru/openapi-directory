# ScriptsDifferenceListModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**differences** | [**List[ScriptsDifferenceModel]**](ScriptsDifferenceModel.md) |  | [optional] 

## Example

```python
from openapi_client.models.scripts_difference_list_model import ScriptsDifferenceListModel

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptsDifferenceListModel from a JSON string
scripts_difference_list_model_instance = ScriptsDifferenceListModel.from_json(json)
# print the JSON string representation of the object
print(ScriptsDifferenceListModel.to_json())

# convert the object into a dict
scripts_difference_list_model_dict = scripts_difference_list_model_instance.to_dict()
# create an instance of ScriptsDifferenceListModel from a dict
scripts_difference_list_model_from_dict = ScriptsDifferenceListModel.from_dict(scripts_difference_list_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


