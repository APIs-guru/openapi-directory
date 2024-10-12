# ValidateTransferResponse

Transfer validation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ValidateTransferResponseProperties**](ValidateTransferResponseProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.validate_transfer_response import ValidateTransferResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateTransferResponse from a JSON string
validate_transfer_response_instance = ValidateTransferResponse.from_json(json)
# print the JSON string representation of the object
print(ValidateTransferResponse.to_json())

# convert the object into a dict
validate_transfer_response_dict = validate_transfer_response_instance.to_dict()
# create an instance of ValidateTransferResponse from a dict
validate_transfer_response_from_dict = ValidateTransferResponse.from_dict(validate_transfer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


