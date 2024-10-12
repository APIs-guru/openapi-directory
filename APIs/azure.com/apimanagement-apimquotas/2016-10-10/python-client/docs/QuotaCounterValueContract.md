# QuotaCounterValueContract

Quota counter value details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calls_count** | **int** | Number of times Counter was called. | [optional] 
**kb_transferred** | **float** | Data Transferred in KiloBytes. | [optional] 

## Example

```python
from openapi_client.models.quota_counter_value_contract import QuotaCounterValueContract

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaCounterValueContract from a JSON string
quota_counter_value_contract_instance = QuotaCounterValueContract.from_json(json)
# print the JSON string representation of the object
print(QuotaCounterValueContract.to_json())

# convert the object into a dict
quota_counter_value_contract_dict = quota_counter_value_contract_instance.to_dict()
# create an instance of QuotaCounterValueContract from a dict
quota_counter_value_contract_from_dict = QuotaCounterValueContract.from_dict(quota_counter_value_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


