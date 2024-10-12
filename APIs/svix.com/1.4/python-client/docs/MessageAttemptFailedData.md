# MessageAttemptFailedData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**response_status_code** | **int** |  | 
**timestamp** | **datetime** |  | 

## Example

```python
from openapi_client.models.message_attempt_failed_data import MessageAttemptFailedData

# TODO update the JSON string below
json = "{}"
# create an instance of MessageAttemptFailedData from a JSON string
message_attempt_failed_data_instance = MessageAttemptFailedData.from_json(json)
# print the JSON string representation of the object
print(MessageAttemptFailedData.to_json())

# convert the object into a dict
message_attempt_failed_data_dict = message_attempt_failed_data_instance.to_dict()
# create an instance of MessageAttemptFailedData from a dict
message_attempt_failed_data_from_dict = MessageAttemptFailedData.from_dict(message_attempt_failed_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


