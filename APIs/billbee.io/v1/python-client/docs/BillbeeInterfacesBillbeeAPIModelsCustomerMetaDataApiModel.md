# BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataApiModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**sub_type** | **str** |  | [optional] 
**type_id** | **int** |  | [optional] 
**type_name** | **str** |  | [optional] [readonly] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_models_customer_meta_data_api_model import BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataApiModel

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataApiModel from a JSON string
billbee_interfaces_billbee_api_models_customer_meta_data_api_model_instance = BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataApiModel.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataApiModel.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_models_customer_meta_data_api_model_dict = billbee_interfaces_billbee_api_models_customer_meta_data_api_model_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataApiModel from a dict
billbee_interfaces_billbee_api_models_customer_meta_data_api_model_from_dict = BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataApiModel.from_dict(billbee_interfaces_billbee_api_models_customer_meta_data_api_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


