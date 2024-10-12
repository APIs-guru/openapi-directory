# BadResponsesFaultConfig

Config for bad requests injection fault

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ratio** | **float** | The percentage of requests affected by this fault. Value should be between 0.0 and 1.0 | 
**responses** | [**List[BadResponse]**](BadResponse.md) | The possibles responses | 

## Example

```python
from openapi_client.models.bad_responses_fault_config import BadResponsesFaultConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BadResponsesFaultConfig from a JSON string
bad_responses_fault_config_instance = BadResponsesFaultConfig.from_json(json)
# print the JSON string representation of the object
print(BadResponsesFaultConfig.to_json())

# convert the object into a dict
bad_responses_fault_config_dict = bad_responses_fault_config_instance.to_dict()
# create an instance of BadResponsesFaultConfig from a dict
bad_responses_fault_config_from_dict = BadResponsesFaultConfig.from_dict(bad_responses_fault_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


