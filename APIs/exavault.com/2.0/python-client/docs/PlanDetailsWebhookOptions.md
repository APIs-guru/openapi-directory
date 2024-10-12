# PlanDetailsWebhookOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** |  | [optional] 
**include_triggers** | **str** |  | [optional] 
**restriction_types** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.plan_details_webhook_options import PlanDetailsWebhookOptions

# TODO update the JSON string below
json = "{}"
# create an instance of PlanDetailsWebhookOptions from a JSON string
plan_details_webhook_options_instance = PlanDetailsWebhookOptions.from_json(json)
# print the JSON string representation of the object
print(PlanDetailsWebhookOptions.to_json())

# convert the object into a dict
plan_details_webhook_options_dict = plan_details_webhook_options_instance.to_dict()
# create an instance of PlanDetailsWebhookOptions from a dict
plan_details_webhook_options_from_dict = PlanDetailsWebhookOptions.from_dict(plan_details_webhook_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


