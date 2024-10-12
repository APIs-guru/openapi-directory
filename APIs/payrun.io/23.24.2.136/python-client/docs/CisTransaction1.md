# CisTransaction1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cis_message_type** | **str** | The cis transactions&#39; cis message type | [optional] 
**employer_core** | [**EmployerCore**](EmployerCore.md) |  | [optional] 
**request_data** | **str** | The cis transactions&#39; request data | [optional] 
**response_data** | **str** | The cis transactions&#39; response data | [optional] 
**tax_year** | **int** | The cis transactions&#39; tax year | [optional] 
**timestamp** | **datetime** | The cis transactions&#39; timestamp | [optional] 
**transaction_status** | **str** | The cis transactions&#39; transaction status | [optional] 
**transmission_date** | **datetime** | The cis transactions&#39; transmission date | [optional] 

## Example

```python
from openapi_client.models.cis_transaction1 import CisTransaction1

# TODO update the JSON string below
json = "{}"
# create an instance of CisTransaction1 from a JSON string
cis_transaction1_instance = CisTransaction1.from_json(json)
# print the JSON string representation of the object
print(CisTransaction1.to_json())

# convert the object into a dict
cis_transaction1_dict = cis_transaction1_instance.to_dict()
# create an instance of CisTransaction1 from a dict
cis_transaction1_from_dict = CisTransaction1.from_dict(cis_transaction1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


