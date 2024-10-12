# RtiTransactionBase1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employer_core** | [**EmployerCore1**](EmployerCore1.md) |  | [optional] 
**request_data** | **str** | The rti transaction bases&#39; request data | [optional] 
**response_data** | **str** | The rti transaction bases&#39; response data | [optional] 
**rti_type** | **str** | The rti transaction bases&#39; rti type | [optional] 
**tax_year** | **int** | The rti transaction bases&#39; tax year | [optional] 
**timestamp** | **datetime** | The rti transaction bases&#39; timestamp | [optional] 
**transaction_status** | **str** | The rti transaction bases&#39; transaction status | [optional] 
**transmission_date** | **datetime** | The rti transaction bases&#39; transmission date | [optional] 

## Example

```python
from openapi_client.models.rti_transaction_base1 import RtiTransactionBase1

# TODO update the JSON string below
json = "{}"
# create an instance of RtiTransactionBase1 from a JSON string
rti_transaction_base1_instance = RtiTransactionBase1.from_json(json)
# print the JSON string representation of the object
print(RtiTransactionBase1.to_json())

# convert the object into a dict
rti_transaction_base1_dict = rti_transaction_base1_instance.to_dict()
# create an instance of RtiTransactionBase1 from a dict
rti_transaction_base1_from_dict = RtiTransactionBase1.from_dict(rti_transaction_base1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


