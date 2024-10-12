# AppInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppInfo**](AppInfo.md) |  | 
**included** | [**List[AppInfoResponseIncludedInner]**](AppInfoResponseIncludedInner.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.app_info_response import AppInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppInfoResponse from a JSON string
app_info_response_instance = AppInfoResponse.from_json(json)
# print the JSON string representation of the object
print(AppInfoResponse.to_json())

# convert the object into a dict
app_info_response_dict = app_info_response_instance.to_dict()
# create an instance of AppInfoResponse from a dict
app_info_response_from_dict = AppInfoResponse.from_dict(app_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


