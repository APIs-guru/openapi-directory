# DeleteScheduledResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted_message_statuses** | [**List[DeletedMessageStatus]**](DeletedMessageStatus.md) | An array of ***deletedMessageStatus*** objects detailing the deleted status of each message requested for deletion.  | [optional] 
**status_code** | **int** | The http status code returned - reflected in the body for convenience | [optional] 
**time_stamp** | **str** | The date/time the request was processed, in the format YYYYMMDDhhmmssSSS | [optional] 
**version** | **str** | The current version of the API of the endpoint that was called | [optional] 

## Example

```python
from openapi_client.models.delete_scheduled_response import DeleteScheduledResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteScheduledResponse from a JSON string
delete_scheduled_response_instance = DeleteScheduledResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteScheduledResponse.to_json())

# convert the object into a dict
delete_scheduled_response_dict = delete_scheduled_response_instance.to_dict()
# create an instance of DeleteScheduledResponse from a dict
delete_scheduled_response_from_dict = DeleteScheduledResponse.from_dict(delete_scheduled_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


