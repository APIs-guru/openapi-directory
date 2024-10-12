# LogicAppReceiver

A logic app receiver.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback_url** | **str** | The callback url where http request sent to. | 
**name** | **str** | The name of the logic app receiver. Names must be unique across all receivers within an action group. | 
**resource_id** | **str** | The azure resource id of the logic app receiver. | 
**use_common_alert_schema** | **bool** | Indicates whether to use common alert schema. | 

## Example

```python
from openapi_client.models.logic_app_receiver import LogicAppReceiver

# TODO update the JSON string below
json = "{}"
# create an instance of LogicAppReceiver from a JSON string
logic_app_receiver_instance = LogicAppReceiver.from_json(json)
# print the JSON string representation of the object
print(LogicAppReceiver.to_json())

# convert the object into a dict
logic_app_receiver_dict = logic_app_receiver_instance.to_dict()
# create an instance of LogicAppReceiver from a dict
logic_app_receiver_from_dict = LogicAppReceiver.from_dict(logic_app_receiver_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


