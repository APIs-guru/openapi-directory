# BatchDeleteAlertsRequest

A request to perform batch delete on alerts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_id** | **List[str]** | Required. The list of alert IDs to delete. | [optional] 
**customer_id** | **str** | Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The &#x60;customer_id&#x60; must have the initial \&quot;C\&quot; stripped (for example, &#x60;046psxkn&#x60;). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). | [optional] 

## Example

```python
from openapi_client.models.batch_delete_alerts_request import BatchDeleteAlertsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchDeleteAlertsRequest from a JSON string
batch_delete_alerts_request_instance = BatchDeleteAlertsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchDeleteAlertsRequest.to_json())

# convert the object into a dict
batch_delete_alerts_request_dict = batch_delete_alerts_request_instance.to_dict()
# create an instance of BatchDeleteAlertsRequest from a dict
batch_delete_alerts_request_from_dict = BatchDeleteAlertsRequest.from_dict(batch_delete_alerts_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


