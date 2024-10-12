# MabErrorInfo

Azure Backup Server workload-specific error information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_string** | **str** | Localized error string. | [optional] 
**recommendations** | **List[str]** | List of localized recommendations. | [optional] 

## Example

```python
from openapi_client.models.mab_error_info import MabErrorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of MabErrorInfo from a JSON string
mab_error_info_instance = MabErrorInfo.from_json(json)
# print the JSON string representation of the object
print(MabErrorInfo.to_json())

# convert the object into a dict
mab_error_info_dict = mab_error_info_instance.to_dict()
# create an instance of MabErrorInfo from a dict
mab_error_info_from_dict = MabErrorInfo.from_dict(mab_error_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


