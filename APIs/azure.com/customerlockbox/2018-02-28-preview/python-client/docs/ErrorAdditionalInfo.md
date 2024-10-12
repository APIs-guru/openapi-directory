# ErrorAdditionalInfo

An error additional info for the Lockbox service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info** | [**ErrorAdditionalInfoInfo**](ErrorAdditionalInfoInfo.md) |  | [optional] 
**type** | **str** | The type of error info. | [optional] 

## Example

```python
from openapi_client.models.error_additional_info import ErrorAdditionalInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorAdditionalInfo from a JSON string
error_additional_info_instance = ErrorAdditionalInfo.from_json(json)
# print the JSON string representation of the object
print(ErrorAdditionalInfo.to_json())

# convert the object into a dict
error_additional_info_dict = error_additional_info_instance.to_dict()
# create an instance of ErrorAdditionalInfo from a dict
error_additional_info_from_dict = ErrorAdditionalInfo.from_dict(error_additional_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


