# UpdateRunModel

Properties of an update run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the update. | [optional] 
**progress** | [**Step**](Step.md) |  | [optional] 
**state** | [**UpdateRunState**](UpdateRunState.md) |  | [optional] 
**time_started** | **datetime** | Update start time. | [optional] 

## Example

```python
from openapi_client.models.update_run_model import UpdateRunModel

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateRunModel from a JSON string
update_run_model_instance = UpdateRunModel.from_json(json)
# print the JSON string representation of the object
print(UpdateRunModel.to_json())

# convert the object into a dict
update_run_model_dict = update_run_model_instance.to_dict()
# create an instance of UpdateRunModel from a dict
update_run_model_from_dict = UpdateRunModel.from_dict(update_run_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


