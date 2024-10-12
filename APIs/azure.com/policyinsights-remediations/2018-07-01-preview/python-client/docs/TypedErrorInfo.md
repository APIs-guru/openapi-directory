# TypedErrorInfo

Scenario specific error details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info** | **object** | The scenario specific error details. | [optional] [readonly] 
**type** | **str** | The type of included error details. | [optional] [readonly] 

## Example

```python
from openapi_client.models.typed_error_info import TypedErrorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TypedErrorInfo from a JSON string
typed_error_info_instance = TypedErrorInfo.from_json(json)
# print the JSON string representation of the object
print(TypedErrorInfo.to_json())

# convert the object into a dict
typed_error_info_dict = typed_error_info_instance.to_dict()
# create an instance of TypedErrorInfo from a dict
typed_error_info_from_dict = TypedErrorInfo.from_dict(typed_error_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


