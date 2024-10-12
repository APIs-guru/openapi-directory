# StatusMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_closed** | **bool** | Is the connection now closed | [optional] 
**connection_id** | **str** | The connection id | [optional] 
**connections_available** | **int** | The number of connections available for this account at this moment in time. Present on responses to Authentication messages only. | [optional] 
**error_code** | **str** | The type of error in case of a failure | [optional] 
**error_message** | **str** | Additional message in case of a failure | [optional] 
**status_code** | **str** | The status of the last request | [optional] 

## Example

```python
from openapi_client.models.status_message import StatusMessage

# TODO update the JSON string below
json = "{}"
# create an instance of StatusMessage from a JSON string
status_message_instance = StatusMessage.from_json(json)
# print the JSON string representation of the object
print(StatusMessage.to_json())

# convert the object into a dict
status_message_dict = status_message_instance.to_dict()
# create an instance of StatusMessage from a dict
status_message_from_dict = StatusMessage.from_dict(status_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


