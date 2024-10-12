# EnvironmentSize

Represents a size category supported by this Lab Account (small, medium or large)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_price** | **float** | The pay-as-you-go dollar price per hour this size will cost. It does not include discounts and may not reflect the actual price the size will cost. This is the maximum price of all prices within this tier. | [optional] [readonly] 
**min_memory** | **float** | The amount of memory available (in GB). This is the minimum amount of memory within this tier. | [optional] [readonly] 
**min_number_of_cores** | **int** | The number of cores a VM of this size has. This is the minimum number of cores within this tier. | [optional] [readonly] 
**name** | **str** | The size category | [optional] 
**vm_sizes** | [**List[SizeInfo]**](SizeInfo.md) | Represents a set of compute sizes that can serve this given size type | [optional] 

## Example

```python
from openapi_client.models.environment_size import EnvironmentSize

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentSize from a JSON string
environment_size_instance = EnvironmentSize.from_json(json)
# print the JSON string representation of the object
print(EnvironmentSize.to_json())

# convert the object into a dict
environment_size_dict = environment_size_instance.to_dict()
# create an instance of EnvironmentSize from a dict
environment_size_from_dict = EnvironmentSize.from_dict(environment_size_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


