# InternalErrorMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | [optional] [default to 500]
**message** | **str** | Details | [optional] 

## Example

```python
from openapi_client.models.internal_error_message import InternalErrorMessage

# TODO update the JSON string below
json = "{}"
# create an instance of InternalErrorMessage from a JSON string
internal_error_message_instance = InternalErrorMessage.from_json(json)
# print the JSON string representation of the object
print(InternalErrorMessage.to_json())

# convert the object into a dict
internal_error_message_dict = internal_error_message_instance.to_dict()
# create an instance of InternalErrorMessage from a dict
internal_error_message_from_dict = InternalErrorMessage.from_dict(internal_error_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


