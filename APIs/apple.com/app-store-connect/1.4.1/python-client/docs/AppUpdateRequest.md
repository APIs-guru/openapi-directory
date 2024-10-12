# AppUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppUpdateRequestData**](AppUpdateRequestData.md) |  | 

## Example

```python
from openapi_client.models.app_update_request import AppUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppUpdateRequest from a JSON string
app_update_request_instance = AppUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(AppUpdateRequest.to_json())

# convert the object into a dict
app_update_request_dict = app_update_request_instance.to_dict()
# create an instance of AppUpdateRequest from a dict
app_update_request_from_dict = AppUpdateRequest.from_dict(app_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


