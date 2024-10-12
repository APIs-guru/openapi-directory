# ProtectionResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ozone** | **float** |  | 
**ozone_time** | **str** |  | 
**uv** | **float** |  | 
**uv_max** | **float** |  | 
**uv_max_time** | **str** |  | 
**uv_time** | **str** |  | 

## Example

```python
from openapi_client.models.protection_result import ProtectionResult

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectionResult from a JSON string
protection_result_instance = ProtectionResult.from_json(json)
# print the JSON string representation of the object
print(ProtectionResult.to_json())

# convert the object into a dict
protection_result_dict = protection_result_instance.to_dict()
# create an instance of ProtectionResult from a dict
protection_result_from_dict = ProtectionResult.from_dict(protection_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


