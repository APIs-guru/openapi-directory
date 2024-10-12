# DeletedMessageStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_message_id** | **int** | The WinSMS API Message Id identifying the SMS message.  | [optional] 
**credit_cost** | **float** | The number of credits refunded to your account after deleting the scheduled message.  If the deletion was unsuccessful, this value will be 0.  | [optional] 
**delete_error** | **str** | If the ***deleted*** value is false, this will contain an error code indicating the reason for the failure. If the scheduled SMS message was successfully deleted, this value will be blank.  | [optional] 
**deleted** | **bool** | A boolean value indicating whether a scheduled SMS message was successfully deleted  | [optional] 
**mobile_number** | **str** | The mobile number of the recipient of the SMS message, using the international E164 (without the plus) format  | [optional] 

## Example

```python
from openapi_client.models.deleted_message_status import DeletedMessageStatus

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedMessageStatus from a JSON string
deleted_message_status_instance = DeletedMessageStatus.from_json(json)
# print the JSON string representation of the object
print(DeletedMessageStatus.to_json())

# convert the object into a dict
deleted_message_status_dict = deleted_message_status_instance.to_dict()
# create an instance of DeletedMessageStatus from a dict
deleted_message_status_from_dict = DeletedMessageStatus.from_dict(deleted_message_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


