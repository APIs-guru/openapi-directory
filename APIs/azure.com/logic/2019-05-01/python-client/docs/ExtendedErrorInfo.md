# ExtendedErrorInfo

The extended error info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | [**ErrorResponseCode**](ErrorResponseCode.md) |  | 
**details** | [**List[ExtendedErrorInfo]**](ExtendedErrorInfo.md) | The error message details. | [optional] 
**inner_error** | **object** |  | [optional] 
**message** | **str** | The error message. | 

## Example

```python
from openapi_client.models.extended_error_info import ExtendedErrorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedErrorInfo from a JSON string
extended_error_info_instance = ExtendedErrorInfo.from_json(json)
# print the JSON string representation of the object
print(ExtendedErrorInfo.to_json())

# convert the object into a dict
extended_error_info_dict = extended_error_info_instance.to_dict()
# create an instance of ExtendedErrorInfo from a dict
extended_error_info_from_dict = ExtendedErrorInfo.from_dict(extended_error_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


