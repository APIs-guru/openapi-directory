# CrashGroupModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crash_count** | **int** | Count of model. | [optional] 
**model_name** | **str** | Model&#39;s name. | [optional] 

## Example

```python
from openapi_client.models.crash_group_model import CrashGroupModel

# TODO update the JSON string below
json = "{}"
# create an instance of CrashGroupModel from a JSON string
crash_group_model_instance = CrashGroupModel.from_json(json)
# print the JSON string representation of the object
print(CrashGroupModel.to_json())

# convert the object into a dict
crash_group_model_dict = crash_group_model_instance.to_dict()
# create an instance of CrashGroupModel from a dict
crash_group_model_from_dict = CrashGroupModel.from_dict(crash_group_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


