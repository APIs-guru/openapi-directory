# BillbeeInterfacesBillbeeAPIModelAdditionalFeeApiModel

Stores information about additional positions like shipcost

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gross** | **float** |  | [optional] 
**net** | **float** |  | [optional] 
**type** | **str** |  | [optional] 
**vat_amount** | **float** |  | [optional] 
**vat_rate** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_model_additional_fee_api_model import BillbeeInterfacesBillbeeAPIModelAdditionalFeeApiModel

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelAdditionalFeeApiModel from a JSON string
billbee_interfaces_billbee_api_model_additional_fee_api_model_instance = BillbeeInterfacesBillbeeAPIModelAdditionalFeeApiModel.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelAdditionalFeeApiModel.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_model_additional_fee_api_model_dict = billbee_interfaces_billbee_api_model_additional_fee_api_model_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelAdditionalFeeApiModel from a dict
billbee_interfaces_billbee_api_model_additional_fee_api_model_from_dict = BillbeeInterfacesBillbeeAPIModelAdditionalFeeApiModel.from_dict(billbee_interfaces_billbee_api_model_additional_fee_api_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


