# Callback

An instance of a Callback created by an execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_payloads** | **List[str]** | Output only. The payloads received by the callback that have not been processed by a waiting execution step. | [optional] [readonly] 
**method** | **str** | Output only. The method accepted by the callback. For example: GET, POST, PUT. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the callback. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}/callback/{callback} | [optional] [readonly] 
**waiters** | **str** | Output only. Number of execution steps waiting on this callback. | [optional] [readonly] 

## Example

```python
from openapi_client.models.callback import Callback

# TODO update the JSON string below
json = "{}"
# create an instance of Callback from a JSON string
callback_instance = Callback.from_json(json)
# print the JSON string representation of the object
print(Callback.to_json())

# convert the object into a dict
callback_dict = callback_instance.to_dict()
# create an instance of Callback from a dict
callback_from_dict = Callback.from_dict(callback_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


