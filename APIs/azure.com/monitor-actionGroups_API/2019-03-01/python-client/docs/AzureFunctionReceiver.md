# AzureFunctionReceiver

An azure function receiver.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**function_app_resource_id** | **str** | The azure resource id of the function app. | 
**function_name** | **str** | The function name in the function app. | 
**http_trigger_url** | **str** | The http trigger url where http request sent to. | 
**name** | **str** | The name of the azure function receiver. Names must be unique across all receivers within an action group. | 
**use_common_alert_schema** | **bool** | Indicates whether to use common alert schema. | 

## Example

```python
from openapi_client.models.azure_function_receiver import AzureFunctionReceiver

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFunctionReceiver from a JSON string
azure_function_receiver_instance = AzureFunctionReceiver.from_json(json)
# print the JSON string representation of the object
print(AzureFunctionReceiver.to_json())

# convert the object into a dict
azure_function_receiver_dict = azure_function_receiver_instance.to_dict()
# create an instance of AzureFunctionReceiver from a dict
azure_function_receiver_from_dict = AzureFunctionReceiver.from_dict(azure_function_receiver_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


