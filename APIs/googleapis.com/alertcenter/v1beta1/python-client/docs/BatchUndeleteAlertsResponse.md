# BatchUndeleteAlertsResponse

Response to batch undelete operation on alerts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_alert_status** | [**Dict[str, Status]**](Status.md) | The status details for each failed &#x60;alert_id&#x60;. | [optional] 
**success_alert_ids** | **List[str]** | The successful list of alert IDs. | [optional] 

## Example

```python
from openapi_client.models.batch_undelete_alerts_response import BatchUndeleteAlertsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUndeleteAlertsResponse from a JSON string
batch_undelete_alerts_response_instance = BatchUndeleteAlertsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchUndeleteAlertsResponse.to_json())

# convert the object into a dict
batch_undelete_alerts_response_dict = batch_undelete_alerts_response_instance.to_dict()
# create an instance of BatchUndeleteAlertsResponse from a dict
batch_undelete_alerts_response_from_dict = BatchUndeleteAlertsResponse.from_dict(batch_undelete_alerts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


