# SubaccountInfo2


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
from openapi_client.models.subaccount_info2 import SubaccountInfo2

# TODO update the JSON string below
json = "{}"
# create an instance of SubaccountInfo2 from a JSON string
subaccount_info2_instance = SubaccountInfo2.from_json(json)
# print the JSON string representation of the object
print(SubaccountInfo2.to_json())

# convert the object into a dict
subaccount_info2_dict = subaccount_info2_instance.to_dict()
# create an instance of SubaccountInfo2 from a dict
subaccount_info2_from_dict = SubaccountInfo2.from_dict(subaccount_info2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


