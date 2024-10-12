# ApiV1ScheduledStatusesIdPutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheduled_at** | **datetime** | ISO 8601 Datetime at which the status will be published. Must be at least 5 minutes into the future. | [optional] 

## Example

```python
from openapi_client.models.api_v1_scheduled_statuses_id_put_request import ApiV1ScheduledStatusesIdPutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1ScheduledStatusesIdPutRequest from a JSON string
api_v1_scheduled_statuses_id_put_request_instance = ApiV1ScheduledStatusesIdPutRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1ScheduledStatusesIdPutRequest.to_json())

# convert the object into a dict
api_v1_scheduled_statuses_id_put_request_dict = api_v1_scheduled_statuses_id_put_request_instance.to_dict()
# create an instance of ApiV1ScheduledStatusesIdPutRequest from a dict
api_v1_scheduled_statuses_id_put_request_from_dict = ApiV1ScheduledStatusesIdPutRequest.from_dict(api_v1_scheduled_statuses_id_put_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


