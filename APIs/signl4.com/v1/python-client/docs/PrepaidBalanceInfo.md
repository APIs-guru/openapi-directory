# PrepaidBalanceInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | **int** |  | [optional] 
**latest_top_up** | **datetime** |  | [optional] 
**pending_transaction** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.prepaid_balance_info import PrepaidBalanceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PrepaidBalanceInfo from a JSON string
prepaid_balance_info_instance = PrepaidBalanceInfo.from_json(json)
# print the JSON string representation of the object
print(PrepaidBalanceInfo.to_json())

# convert the object into a dict
prepaid_balance_info_dict = prepaid_balance_info_instance.to_dict()
# create an instance of PrepaidBalanceInfo from a dict
prepaid_balance_info_from_dict = PrepaidBalanceInfo.from_dict(prepaid_balance_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


