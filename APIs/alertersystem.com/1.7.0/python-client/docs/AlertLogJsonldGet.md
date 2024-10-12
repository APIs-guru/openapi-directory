# AlertLogJsonldGet

The AlertLog resource is a chronological record of all the alerts that have been triggered, including the status of each alert.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AlertLogJsonldGetContext**](AlertLogJsonldGetContext.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**type** | **str** |  | [optional] [readonly] 
**alert_log_error_message** | **str** | The reason why the dispatch of the alert failed. | [optional] 
**alert_log_message_id** | **str** | The id of the successfully dispatched message as received from the transport that was used. | [optional] 
**alert_log_status_code** | **str** | The status of the alert log. | [optional] 
**alert_service** | **str** | The alert service that is related to this resource. | [optional] 
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] [readonly] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**monitor** | **str** | The monitor that is related to this resource instance. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | [optional] 
**ping** | **str** | The ping that triggered this resource instance. | [optional] 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**webhook_response_body** | **str** | The response body returned by a successful request to a webhook URL. Length limited to 1,000 characters. | [optional] 
**webhook_response_headers** | **List[str]** | The response headers returned by a successful request to a webhook URL. | [optional] 

## Example

```python
from openapi_client.models.alert_log_jsonld_get import AlertLogJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of AlertLogJsonldGet from a JSON string
alert_log_jsonld_get_instance = AlertLogJsonldGet.from_json(json)
# print the JSON string representation of the object
print(AlertLogJsonldGet.to_json())

# convert the object into a dict
alert_log_jsonld_get_dict = alert_log_jsonld_get_instance.to_dict()
# create an instance of AlertLogJsonldGet from a dict
alert_log_jsonld_get_from_dict = AlertLogJsonldGet.from_dict(alert_log_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


