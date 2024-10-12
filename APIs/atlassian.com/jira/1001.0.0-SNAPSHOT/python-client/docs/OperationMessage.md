# OperationMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The human-readable message that describes the result. | 
**status_code** | **int** | The status code of the response. | 

## Example

```python
from openapi_client.models.operation_message import OperationMessage

# TODO update the JSON string below
json = "{}"
# create an instance of OperationMessage from a JSON string
operation_message_instance = OperationMessage.from_json(json)
# print the JSON string representation of the object
print(OperationMessage.to_json())

# convert the object into a dict
operation_message_dict = operation_message_instance.to_dict()
# create an instance of OperationMessage from a dict
operation_message_from_dict = OperationMessage.from_dict(operation_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


