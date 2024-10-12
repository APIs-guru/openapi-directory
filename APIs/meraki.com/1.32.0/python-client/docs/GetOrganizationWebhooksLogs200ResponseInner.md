# GetOrganizationWebhooksLogs200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_type** | **str** | Type of alert that the webhook is delivering | [optional] 
**logged_at** | **datetime** | When the webhook log was created, in ISO8601 format | [optional] 
**network_id** | **str** | Network ID for the webhook log | [optional] 
**organization_id** | **str** | ID for the webhook log&#39;s organization | [optional] 
**response_code** | **int** | Response code from the webhook | [optional] 
**response_duration** | **int** | Duration of the response, in milliseconds | [optional] 
**sent_at** | **datetime** | When the webhook was sent, in ISO8601 format | [optional] 
**url** | **str** | URL where the webhook was sent | [optional] 

## Example

```python
from openapi_client.models.get_organization_webhooks_logs200_response_inner import GetOrganizationWebhooksLogs200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationWebhooksLogs200ResponseInner from a JSON string
get_organization_webhooks_logs200_response_inner_instance = GetOrganizationWebhooksLogs200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationWebhooksLogs200ResponseInner.to_json())

# convert the object into a dict
get_organization_webhooks_logs200_response_inner_dict = get_organization_webhooks_logs200_response_inner_instance.to_dict()
# create an instance of GetOrganizationWebhooksLogs200ResponseInner from a dict
get_organization_webhooks_logs200_response_inner_from_dict = GetOrganizationWebhooksLogs200ResponseInner.from_dict(get_organization_webhooks_logs200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


