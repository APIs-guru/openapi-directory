# SubaccountsListResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**custom_quota** | **int** |  | [optional] 
**first_sent_at** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**reputation** | **int** |  | [optional] 
**sent_monthly** | **int** |  | [optional] 
**sent_total** | **int** |  | [optional] 
**sent_weekly** | **int** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.subaccounts_list_response_inner import SubaccountsListResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of SubaccountsListResponseInner from a JSON string
subaccounts_list_response_inner_instance = SubaccountsListResponseInner.from_json(json)
# print the JSON string representation of the object
print(SubaccountsListResponseInner.to_json())

# convert the object into a dict
subaccounts_list_response_inner_dict = subaccounts_list_response_inner_instance.to_dict()
# create an instance of SubaccountsListResponseInner from a dict
subaccounts_list_response_inner_from_dict = SubaccountsListResponseInner.from_dict(subaccounts_list_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


