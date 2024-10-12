# WebhookV2Details


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | Account master username | [optional] 
**attempt_id** | **str** | Entry - retry identifier | [optional] 
**event** | **str** | Type of related activity | [optional] 
**event_data** | [**WebhookV2EventData**](WebhookV2EventData.md) |  | [optional] 
**event_timestamp** | **datetime** | Date and time event originally took place | [optional] 
**ip_address** | **str** | IP address of related activity | [optional] 
**protocol** | **str** | Type of connection used for related activity | [optional] 
**username** | **str** | Username logged for related activity. May refer to someone who is not a user of the account, such as a share recipient or \&quot;publ | [optional] 

## Example

```python
from openapi_client.models.webhook_v2_details import WebhookV2Details

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookV2Details from a JSON string
webhook_v2_details_instance = WebhookV2Details.from_json(json)
# print the JSON string representation of the object
print(WebhookV2Details.to_json())

# convert the object into a dict
webhook_v2_details_dict = webhook_v2_details_instance.to_dict()
# create an instance of WebhookV2Details from a dict
webhook_v2_details_from_dict = WebhookV2Details.from_dict(webhook_v2_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


