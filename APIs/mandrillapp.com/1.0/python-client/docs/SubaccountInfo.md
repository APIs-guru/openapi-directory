# SubaccountInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_quota** | **int** |  | [optional] 
**id** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**notes** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.subaccount_info import SubaccountInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SubaccountInfo from a JSON string
subaccount_info_instance = SubaccountInfo.from_json(json)
# print the JSON string representation of the object
print(SubaccountInfo.to_json())

# convert the object into a dict
subaccount_info_dict = subaccount_info_instance.to_dict()
# create an instance of SubaccountInfo from a dict
subaccount_info_from_dict = SubaccountInfo.from_dict(subaccount_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


