# AddressValidationResult

An address validation result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matched_address** | [**Address**](Address.md) | The matched address found by the Shipengine API | [readonly] 
**messages** | [**List[ResponseMessage]**](ResponseMessage.md) | The list of messages that were generated during the address validation request. | [readonly] [default to []]
**original_address** | [**Address**](Address.md) | The original address that was sent for validation | 
**status** | [**AddressValidationStatus**](AddressValidationStatus.md) |  | 

## Example

```python
from openapi_client.models.address_validation_result import AddressValidationResult

# TODO update the JSON string below
json = "{}"
# create an instance of AddressValidationResult from a JSON string
address_validation_result_instance = AddressValidationResult.from_json(json)
# print the JSON string representation of the object
print(AddressValidationResult.to_json())

# convert the object into a dict
address_validation_result_dict = address_validation_result_instance.to_dict()
# create an instance of AddressValidationResult from a dict
address_validation_result_from_dict = AddressValidationResult.from_dict(address_validation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


