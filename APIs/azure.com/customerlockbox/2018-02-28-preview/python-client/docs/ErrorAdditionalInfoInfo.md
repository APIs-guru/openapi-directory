# ErrorAdditionalInfoInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_status** | [**LockboxRequestStatus**](LockboxRequestStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.error_additional_info_info import ErrorAdditionalInfoInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorAdditionalInfoInfo from a JSON string
error_additional_info_info_instance = ErrorAdditionalInfoInfo.from_json(json)
# print the JSON string representation of the object
print(ErrorAdditionalInfoInfo.to_json())

# convert the object into a dict
error_additional_info_info_dict = error_additional_info_info_instance.to_dict()
# create an instance of ErrorAdditionalInfoInfo from a dict
error_additional_info_info_from_dict = ErrorAdditionalInfoInfo.from_dict(error_additional_info_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


