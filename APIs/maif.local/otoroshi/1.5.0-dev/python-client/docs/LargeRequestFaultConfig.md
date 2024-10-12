# LargeRequestFaultConfig

Config for large request injection fault

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_request_size** | **int** | The size added to the request body in bytes. Added payload will be spaces only. | 
**ratio** | **float** | The percentage of requests affected by this fault. Value should be between 0.0 and 1.0 | 

## Example

```python
from openapi_client.models.large_request_fault_config import LargeRequestFaultConfig

# TODO update the JSON string below
json = "{}"
# create an instance of LargeRequestFaultConfig from a JSON string
large_request_fault_config_instance = LargeRequestFaultConfig.from_json(json)
# print the JSON string representation of the object
print(LargeRequestFaultConfig.to_json())

# convert the object into a dict
large_request_fault_config_dict = large_request_fault_config_instance.to_dict()
# create an instance of LargeRequestFaultConfig from a dict
large_request_fault_config_from_dict = LargeRequestFaultConfig.from_dict(large_request_fault_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


