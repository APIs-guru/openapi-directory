# WebhookDetails

A list of webhooks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | **List[str]** | The Jira events that trigger the webhook. | 
**field_ids_filter** | **List[str]** | A list of field IDs. When the issue changelog contains any of the fields, the webhook &#x60;jira:issue_updated&#x60; is sent. If this parameter is not present, the app is notified about all field updates. | [optional] 
**issue_property_keys_filter** | **List[str]** | A list of issue property keys. A change of those issue properties triggers the &#x60;issue_property_set&#x60; or &#x60;issue_property_deleted&#x60; webhooks. If this parameter is not present, the app is notified about all issue property updates. | [optional] 
**jql_filter** | **str** | The JQL filter that specifies which issues the webhook is sent for. Only a subset of JQL can be used. The supported elements are:   *  Fields: &#x60;issueKey&#x60;, &#x60;project&#x60;, &#x60;issuetype&#x60;, &#x60;status&#x60;, &#x60;assignee&#x60;, &#x60;reporter&#x60;, &#x60;issue.property&#x60;, and &#x60;cf[id]&#x60;. For custom fields (&#x60;cf[id]&#x60;), only the epic label custom field is supported.\&quot;.  *  Operators: &#x60;&#x3D;&#x60;, &#x60;!&#x3D;&#x60;, &#x60;IN&#x60;, and &#x60;NOT IN&#x60;. | 

## Example

```python
from openapi_client.models.webhook_details import WebhookDetails

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookDetails from a JSON string
webhook_details_instance = WebhookDetails.from_json(json)
# print the JSON string representation of the object
print(WebhookDetails.to_json())

# convert the object into a dict
webhook_details_dict = webhook_details_instance.to_dict()
# create an instance of WebhookDetails from a dict
webhook_details_from_dict = WebhookDetails.from_dict(webhook_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


