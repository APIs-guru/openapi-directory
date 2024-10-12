# ExtendedErrorInfoList

List of the extended error information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to next page. | [optional] 
**value** | [**List[ExtendedErrorInfo]**](ExtendedErrorInfo.md) | List of the extended error information. | [optional] 

## Example

```python
from openapi_client.models.extended_error_info_list import ExtendedErrorInfoList

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedErrorInfoList from a JSON string
extended_error_info_list_instance = ExtendedErrorInfoList.from_json(json)
# print the JSON string representation of the object
print(ExtendedErrorInfoList.to_json())

# convert the object into a dict
extended_error_info_list_dict = extended_error_info_list_instance.to_dict()
# create an instance of ExtendedErrorInfoList from a dict
extended_error_info_list_from_dict = ExtendedErrorInfoList.from_dict(extended_error_info_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


