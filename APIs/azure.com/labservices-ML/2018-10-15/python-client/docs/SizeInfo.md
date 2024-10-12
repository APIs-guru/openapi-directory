# SizeInfo

Contains detailed information about a size

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_size** | **str** | Represents the actual compute size, e.g. Standard_A2_v2. | [optional] 
**memory** | **float** | The amount of memory available (in GB). | [optional] 
**number_of_cores** | **int** | The number of cores a VM of this size has. | [optional] 
**price** | **float** | The pay-as-you-go price per hour this size will cost. It does not include discounts and may not reflect the actual price the size will cost. | [optional] 

## Example

```python
from openapi_client.models.size_info import SizeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SizeInfo from a JSON string
size_info_instance = SizeInfo.from_json(json)
# print the JSON string representation of the object
print(SizeInfo.to_json())

# convert the object into a dict
size_info_dict = size_info_instance.to_dict()
# create an instance of SizeInfo from a dict
size_info_from_dict = SizeInfo.from_dict(size_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


