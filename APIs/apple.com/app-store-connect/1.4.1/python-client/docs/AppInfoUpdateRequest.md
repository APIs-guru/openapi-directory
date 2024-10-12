# AppInfoUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppInfoUpdateRequestData**](AppInfoUpdateRequestData.md) |  | 

## Example

```python
from openapi_client.models.app_info_update_request import AppInfoUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppInfoUpdateRequest from a JSON string
app_info_update_request_instance = AppInfoUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(AppInfoUpdateRequest.to_json())

# convert the object into a dict
app_info_update_request_dict = app_info_update_request_instance.to_dict()
# create an instance of AppInfoUpdateRequest from a dict
app_info_update_request_from_dict = AppInfoUpdateRequest.from_dict(app_info_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


