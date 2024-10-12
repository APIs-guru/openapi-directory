# DpmErrorInfo

DPM workload-specific error information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_string** | **str** | Localized error string. | [optional] 
**recommendations** | **List[str]** | List of localized recommendations for above error code. | [optional] 

## Example

```python
from openapi_client.models.dpm_error_info import DpmErrorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DpmErrorInfo from a JSON string
dpm_error_info_instance = DpmErrorInfo.from_json(json)
# print the JSON string representation of the object
print(DpmErrorInfo.to_json())

# convert the object into a dict
dpm_error_info_dict = dpm_error_info_instance.to_dict()
# create an instance of DpmErrorInfo from a dict
dpm_error_info_from_dict = DpmErrorInfo.from_dict(dpm_error_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


