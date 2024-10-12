# ValidateTransferResponseProperties

Properties of transfer validation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_id** | **str** | The product id for which this result applies. | [optional] [readonly] 
**results** | [**List[ValidationResultProperties]**](ValidationResultProperties.md) | Array of validation results. | [optional] 
**status** | **str** | The status of validation | [optional] [readonly] 

## Example

```python
from openapi_client.models.validate_transfer_response_properties import ValidateTransferResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateTransferResponseProperties from a JSON string
validate_transfer_response_properties_instance = ValidateTransferResponseProperties.from_json(json)
# print the JSON string representation of the object
print(ValidateTransferResponseProperties.to_json())

# convert the object into a dict
validate_transfer_response_properties_dict = validate_transfer_response_properties_instance.to_dict()
# create an instance of ValidateTransferResponseProperties from a dict
validate_transfer_response_properties_from_dict = ValidateTransferResponseProperties.from_dict(validate_transfer_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


