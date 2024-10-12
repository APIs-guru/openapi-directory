# QuotaCounterContract

Quota counter details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**QuotaCounterValueContractProperties**](QuotaCounterValueContractProperties.md) |  | [optional] 
**counter_key** | **str** | The Key value of the Counter. Must not be empty. | 
**period_end_time** | **datetime** | The date of the end of Counter Period. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | 
**period_key** | **str** | Identifier of the Period for which the counter was collected. Must not be empty. | 
**period_start_time** | **datetime** | The date of the start of Counter Period. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | 

## Example

```python
from openapi_client.models.quota_counter_contract import QuotaCounterContract

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaCounterContract from a JSON string
quota_counter_contract_instance = QuotaCounterContract.from_json(json)
# print the JSON string representation of the object
print(QuotaCounterContract.to_json())

# convert the object into a dict
quota_counter_contract_dict = quota_counter_contract_instance.to_dict()
# create an instance of QuotaCounterContract from a dict
quota_counter_contract_from_dict = QuotaCounterContract.from_dict(quota_counter_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


