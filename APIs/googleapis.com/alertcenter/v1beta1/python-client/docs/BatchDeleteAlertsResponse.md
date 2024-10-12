# BatchDeleteAlertsResponse

Response to batch delete operation on alerts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_alert_status** | [**Dict[str, Status]**](Status.md) | The status details for each failed &#x60;alert_id&#x60;. | [optional] 
**success_alert_ids** | **List[str]** | The successful list of alert IDs. | [optional] 

## Example

```python
from openapi_client.models.batch_delete_alerts_response import BatchDeleteAlertsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchDeleteAlertsResponse from a JSON string
batch_delete_alerts_response_instance = BatchDeleteAlertsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchDeleteAlertsResponse.to_json())

# convert the object into a dict
batch_delete_alerts_response_dict = batch_delete_alerts_response_instance.to_dict()
# create an instance of BatchDeleteAlertsResponse from a dict
batch_delete_alerts_response_from_dict = BatchDeleteAlertsResponse.from_dict(batch_delete_alerts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


