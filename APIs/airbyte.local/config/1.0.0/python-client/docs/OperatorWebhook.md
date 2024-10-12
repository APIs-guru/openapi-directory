# OperatorWebhook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dbt_cloud** | [**OperatorWebhookDbtCloud**](OperatorWebhookDbtCloud.md) |  | [optional] 
**execution_body** | **str** | DEPRECATED. Populate dbtCloud instead. | [optional] 
**execution_url** | **str** | DEPRECATED. Populate dbtCloud instead. | [optional] 
**webhook_config_id** | **str** | The id of the webhook configs to use from the workspace. | [optional] 
**webhook_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.operator_webhook import OperatorWebhook

# TODO update the JSON string below
json = "{}"
# create an instance of OperatorWebhook from a JSON string
operator_webhook_instance = OperatorWebhook.from_json(json)
# print the JSON string representation of the object
print(OperatorWebhook.to_json())

# convert the object into a dict
operator_webhook_dict = operator_webhook_instance.to_dict()
# create an instance of OperatorWebhook from a dict
operator_webhook_from_dict = OperatorWebhook.from_dict(operator_webhook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


