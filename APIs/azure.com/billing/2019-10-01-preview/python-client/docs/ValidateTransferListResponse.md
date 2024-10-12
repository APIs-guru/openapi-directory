# ValidateTransferListResponse

Result of transfer validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ValidateTransferResponse]**](ValidateTransferResponse.md) | The list of transfer validation results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.validate_transfer_list_response import ValidateTransferListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateTransferListResponse from a JSON string
validate_transfer_list_response_instance = ValidateTransferListResponse.from_json(json)
# print the JSON string representation of the object
print(ValidateTransferListResponse.to_json())

# convert the object into a dict
validate_transfer_list_response_dict = validate_transfer_list_response_instance.to_dict()
# create an instance of ValidateTransferListResponse from a dict
validate_transfer_list_response_from_dict = ValidateTransferListResponse.from_dict(validate_transfer_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


