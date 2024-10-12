# QuotaCounterValueContractProperties

Quota counter value details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calls_count** | **int** | Number of times Counter was called. | [optional] 
**kb_transferred** | **float** | Data Transferred in KiloBytes. | [optional] 

## Example

```python
from openapi_client.models.quota_counter_value_contract_properties import QuotaCounterValueContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaCounterValueContractProperties from a JSON string
quota_counter_value_contract_properties_instance = QuotaCounterValueContractProperties.from_json(json)
# print the JSON string representation of the object
print(QuotaCounterValueContractProperties.to_json())

# convert the object into a dict
quota_counter_value_contract_properties_dict = quota_counter_value_contract_properties_instance.to_dict()
# create an instance of QuotaCounterValueContractProperties from a dict
quota_counter_value_contract_properties_from_dict = QuotaCounterValueContractProperties.from_dict(quota_counter_value_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


