# ScriptsDifferenceModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bind** | **str** |  | [optional] 
**change_type** | **str** |  | [optional] 
**file_name** | **str** |  | [optional] 
**script1** | **str** |  | [optional] 
**script2** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.scripts_difference_model import ScriptsDifferenceModel

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptsDifferenceModel from a JSON string
scripts_difference_model_instance = ScriptsDifferenceModel.from_json(json)
# print the JSON string representation of the object
print(ScriptsDifferenceModel.to_json())

# convert the object into a dict
scripts_difference_model_dict = scripts_difference_model_instance.to_dict()
# create an instance of ScriptsDifferenceModel from a dict
scripts_difference_model_from_dict = ScriptsDifferenceModel.from_dict(scripts_difference_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


