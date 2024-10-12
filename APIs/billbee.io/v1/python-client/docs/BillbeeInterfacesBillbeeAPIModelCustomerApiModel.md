# BillbeeInterfacesBillbeeAPIModelCustomerApiModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived_at** | **datetime** | If set, the customer was already archived at the given date. Further modification is disabled. | [optional] 
**default_commercial_mail_address** | [**BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataApiModel**](BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataApiModel.md) |  | [optional] 
**default_fax** | [**BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataApiModel**](BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataApiModel.md) |  | [optional] 
**default_mail_address** | [**BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataApiModel**](BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataApiModel.md) |  | [optional] 
**default_phone1** | [**BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataApiModel**](BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataApiModel.md) |  | [optional] 
**default_phone2** | [**BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataApiModel**](BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataApiModel.md) |  | [optional] 
**default_status_updates_mail_address** | [**BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataApiModel**](BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataApiModel.md) |  | [optional] 
**email** | **str** |  | [optional] 
**id** | **int** | The Billbee Id of the customer | [optional] 
**language_id** | **int** |  | [optional] 
**meta_data** | [**List[BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataApiModel]**](BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataApiModel.md) |  | [optional] 
**name** | **str** |  | [optional] 
**number** | **int** |  | [optional] 
**price_group_id** | **int** |  | [optional] 
**restored_at** | **datetime** | If set, the customer was restored from the archive at the given date. | [optional] 
**tel1** | **str** |  | [optional] 
**tel2** | **str** |  | [optional] 
**type** | **int** | Customer Type | [optional] 
**vat_id** | **str** | The vat-id, that should be saved at the customer. Only used if CustomerVatId is not set on the order. | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_model_customer_api_model import BillbeeInterfacesBillbeeAPIModelCustomerApiModel

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelCustomerApiModel from a JSON string
billbee_interfaces_billbee_api_model_customer_api_model_instance = BillbeeInterfacesBillbeeAPIModelCustomerApiModel.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelCustomerApiModel.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_model_customer_api_model_dict = billbee_interfaces_billbee_api_model_customer_api_model_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelCustomerApiModel from a dict
billbee_interfaces_billbee_api_model_customer_api_model_from_dict = BillbeeInterfacesBillbeeAPIModelCustomerApiModel.from_dict(billbee_interfaces_billbee_api_model_customer_api_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


