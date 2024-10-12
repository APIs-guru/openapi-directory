# Quotas

Quotas state for an api key on a service group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorized_calls_per_day** | **int** | The number of authorized calls per day | 
**authorized_calls_per_month** | **int** | The number of authorized calls per month | 
**authorized_calls_per_sec** | **int** | The number of authorized calls per second | 
**current_calls_per_day** | **int** | The current number of calls per day | 
**current_calls_per_month** | **int** | The current number of calls per month | 
**current_calls_per_sec** | **int** | The current number of calls per second | 
**remaining_calls_per_day** | **int** | The remaining number of calls per day | 
**remaining_calls_per_month** | **int** | The number of authorized calls per month | 
**remaining_calls_per_sec** | **int** | The remaining number of calls per second | 

## Example

```python
from openapi_client.models.quotas import Quotas

# TODO update the JSON string below
json = "{}"
# create an instance of Quotas from a JSON string
quotas_instance = Quotas.from_json(json)
# print the JSON string representation of the object
print(Quotas.to_json())

# convert the object into a dict
quotas_dict = quotas_instance.to_dict()
# create an instance of Quotas from a dict
quotas_from_dict = Quotas.from_dict(quotas_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


