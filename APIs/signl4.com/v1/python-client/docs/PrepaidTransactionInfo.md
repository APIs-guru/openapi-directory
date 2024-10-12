# PrepaidTransactionInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_top_up_id** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] 
**created_by** | **str** |  | [optional] 
**credits** | **int** |  | [optional] 
**currency** | **str** |  | [optional] 
**modified** | **datetime** |  | [optional] 
**package_code** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**status_code** | **int** |  | [optional] 
**subscription_id** | **str** |  | [optional] 
**transaction_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.prepaid_transaction_info import PrepaidTransactionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PrepaidTransactionInfo from a JSON string
prepaid_transaction_info_instance = PrepaidTransactionInfo.from_json(json)
# print the JSON string representation of the object
print(PrepaidTransactionInfo.to_json())

# convert the object into a dict
prepaid_transaction_info_dict = prepaid_transaction_info_instance.to_dict()
# create an instance of PrepaidTransactionInfo from a dict
prepaid_transaction_info_from_dict = PrepaidTransactionInfo.from_dict(prepaid_transaction_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


