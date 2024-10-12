# ResponseMessage

A response message that displays when additional info is needed for an address validation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | [**AddressValidationCode**](AddressValidationCode.md) |  | [readonly] 
**detail_code** | [**AddressValidationDetailCode**](AddressValidationDetailCode.md) |  | 
**message** | **str** | Message explaining the address validation error | [readonly] 
**type** | [**AddressValidationMessageType**](AddressValidationMessageType.md) |  | [readonly] 

## Example

```python
from openapi_client.models.response_message import ResponseMessage

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseMessage from a JSON string
response_message_instance = ResponseMessage.from_json(json)
# print the JSON string representation of the object
print(ResponseMessage.to_json())

# convert the object into a dict
response_message_dict = response_message_instance.to_dict()
# create an instance of ResponseMessage from a dict
response_message_from_dict = ResponseMessage.from_dict(response_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


