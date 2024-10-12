# ValidateMessageRequest

Request for the `ValidateMessage` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | The encoding expected for messages | [optional] 
**message** | **bytearray** | Message to validate against the provided &#x60;schema_spec&#x60;. | [optional] 
**name** | **str** | Name of the schema against which to validate. Format is &#x60;projects/{project}/schemas/{schema}&#x60;. | [optional] 
**var_schema** | [**ModelSchema**](ModelSchema.md) |  | [optional] 

## Example

```python
from openapi_client.models.validate_message_request import ValidateMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateMessageRequest from a JSON string
validate_message_request_instance = ValidateMessageRequest.from_json(json)
# print the JSON string representation of the object
print(ValidateMessageRequest.to_json())

# convert the object into a dict
validate_message_request_dict = validate_message_request_instance.to_dict()
# create an instance of ValidateMessageRequest from a dict
validate_message_request_from_dict = ValidateMessageRequest.from_dict(validate_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


