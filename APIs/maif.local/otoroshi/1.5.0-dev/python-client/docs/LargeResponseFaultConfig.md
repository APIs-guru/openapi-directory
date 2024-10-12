# LargeResponseFaultConfig

Config for large response injection fault

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_request_size** | **int** | The size added to the response body in bytes. Added payload will be spaces only. | [optional] 
**ratio** | **float** | The percentage of requests affected by this fault. Value should be between 0.0 and 1.0 | 

## Example

```python
from openapi_client.models.large_response_fault_config import LargeResponseFaultConfig

# TODO update the JSON string below
json = "{}"
# create an instance of LargeResponseFaultConfig from a JSON string
large_response_fault_config_instance = LargeResponseFaultConfig.from_json(json)
# print the JSON string representation of the object
print(LargeResponseFaultConfig.to_json())

# convert the object into a dict
large_response_fault_config_dict = large_response_fault_config_instance.to_dict()
# create an instance of LargeResponseFaultConfig from a dict
large_response_fault_config_from_dict = LargeResponseFaultConfig.from_dict(large_response_fault_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


