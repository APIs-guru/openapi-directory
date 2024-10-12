# CreditTransferDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**receiving_account_number** | **int** | The WinSMS account number of the account to which credits will be added. | 
**sending_account_number** | **int** | The WinSMS account number of the account from which credits will be deducted. | 
**transfer_quantity** | **int** | The number of credits to transfer from the sending account to the receiving account. | 

## Example

```python
from openapi_client.models.credit_transfer_details import CreditTransferDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CreditTransferDetails from a JSON string
credit_transfer_details_instance = CreditTransferDetails.from_json(json)
# print the JSON string representation of the object
print(CreditTransferDetails.to_json())

# convert the object into a dict
credit_transfer_details_dict = credit_transfer_details_instance.to_dict()
# create an instance of CreditTransferDetails from a dict
credit_transfer_details_from_dict = CreditTransferDetails.from_dict(credit_transfer_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


