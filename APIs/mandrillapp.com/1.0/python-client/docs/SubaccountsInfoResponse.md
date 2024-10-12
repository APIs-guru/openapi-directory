# SubaccountsInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**custom_quota** | **int** |  | [optional] 
**first_sent_at** | **str** |  | [optional] 
**hourly_quota** | **int** |  | [optional] 
**id** | **str** |  | [optional] 
**last_30_days** | [**SendersInfoResponseStatsLast30Days**](SendersInfoResponseStatsLast30Days.md) |  | [optional] 
**name** | **str** |  | [optional] 
**notes** | **str** |  | [optional] 
**reputation** | **int** |  | [optional] 
**sent_hourly** | **int** |  | [optional] 
**sent_monthly** | **int** |  | [optional] 
**sent_total** | **int** |  | [optional] 
**sent_weekly** | **int** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.subaccounts_info_response import SubaccountsInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubaccountsInfoResponse from a JSON string
subaccounts_info_response_instance = SubaccountsInfoResponse.from_json(json)
# print the JSON string representation of the object
print(SubaccountsInfoResponse.to_json())

# convert the object into a dict
subaccounts_info_response_dict = subaccounts_info_response_instance.to_dict()
# create an instance of SubaccountsInfoResponse from a dict
subaccounts_info_response_from_dict = SubaccountsInfoResponse.from_dict(subaccounts_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


