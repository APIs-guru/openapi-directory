# LoggerSamplingContract

Sampling settings contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LoggerSamplingProperties**](LoggerSamplingProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.logger_sampling_contract import LoggerSamplingContract

# TODO update the JSON string below
json = "{}"
# create an instance of LoggerSamplingContract from a JSON string
logger_sampling_contract_instance = LoggerSamplingContract.from_json(json)
# print the JSON string representation of the object
print(LoggerSamplingContract.to_json())

# convert the object into a dict
logger_sampling_contract_dict = logger_sampling_contract_instance.to_dict()
# create an instance of LoggerSamplingContract from a dict
logger_sampling_contract_from_dict = LoggerSamplingContract.from_dict(logger_sampling_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


