# WebhookV1Details


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | Account master username | [optional] 
**attempt** | **int** | Number of times the system has attempted to send | [optional] 
**attempt_id** | **str** | Entry - retry identifier | [optional] 
**event** | **str** | Type of related activity | [optional] 
**protocol** | **str** | Type of connection used for related activity | [optional] 
**username** | **str** | Username logged for related activity. May refer to someone who is not a user of the account, such as a share recipient or \&quot;publ | [optional] 

## Example

```python
from openapi_client.models.webhook_v1_details import WebhookV1Details

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookV1Details from a JSON string
webhook_v1_details_instance = WebhookV1Details.from_json(json)
# print the JSON string representation of the object
print(WebhookV1Details.to_json())

# convert the object into a dict
webhook_v1_details_dict = webhook_v1_details_instance.to_dict()
# create an instance of WebhookV1Details from a dict
webhook_v1_details_from_dict = WebhookV1Details.from_dict(webhook_v1_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


