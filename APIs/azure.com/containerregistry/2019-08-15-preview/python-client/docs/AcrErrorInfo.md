# AcrErrorInfo

Error information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**detail** | **object** | Error details | [optional] 
**message** | **str** | Error message | [optional] 

## Example

```python
from openapi_client.models.acr_error_info import AcrErrorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AcrErrorInfo from a JSON string
acr_error_info_instance = AcrErrorInfo.from_json(json)
# print the JSON string representation of the object
print(AcrErrorInfo.to_json())

# convert the object into a dict
acr_error_info_dict = acr_error_info_instance.to_dict()
# create an instance of AcrErrorInfo from a dict
acr_error_info_from_dict = AcrErrorInfo.from_dict(acr_error_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


