# CPUInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_processor** | **str** | description of the device processor ie &#39;1.8 GHz hexa core 64-bit ARMv8-A&#39; | [optional] 
**cpu_speed_in_ghz** | **float** | the CPU clock speed in GHz | [optional] 
**number_of_cores** | **int** | the number of CPU cores | [optional] 

## Example

```python
from openapi_client.models.cpu_info import CPUInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CPUInfo from a JSON string
cpu_info_instance = CPUInfo.from_json(json)
# print the JSON string representation of the object
print(CPUInfo.to_json())

# convert the object into a dict
cpu_info_dict = cpu_info_instance.to_dict()
# create an instance of CPUInfo from a dict
cpu_info_from_dict = CPUInfo.from_dict(cpu_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


