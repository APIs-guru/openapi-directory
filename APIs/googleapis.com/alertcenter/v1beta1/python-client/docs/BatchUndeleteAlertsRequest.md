# BatchUndeleteAlertsRequest

A request to perform batch undelete on alerts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_id** | **List[str]** | Required. The list of alert IDs to undelete. | [optional] 
**customer_id** | **str** | Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The &#x60;customer_id&#x60; must have the initial \&quot;C\&quot; stripped (for example, &#x60;046psxkn&#x60;). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). | [optional] 

## Example

```python
from openapi_client.models.batch_undelete_alerts_request import BatchUndeleteAlertsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUndeleteAlertsRequest from a JSON string
batch_undelete_alerts_request_instance = BatchUndeleteAlertsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchUndeleteAlertsRequest.to_json())

# convert the object into a dict
batch_undelete_alerts_request_dict = batch_undelete_alerts_request_instance.to_dict()
# create an instance of BatchUndeleteAlertsRequest from a dict
batch_undelete_alerts_request_from_dict = BatchUndeleteAlertsRequest.from_dict(batch_undelete_alerts_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


