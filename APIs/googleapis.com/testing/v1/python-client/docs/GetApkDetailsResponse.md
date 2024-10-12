# GetApkDetailsResponse

Response containing the details of the specified Android application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apk_detail** | [**ApkDetail**](ApkDetail.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_apk_details_response import GetApkDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetApkDetailsResponse from a JSON string
get_apk_details_response_instance = GetApkDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(GetApkDetailsResponse.to_json())

# convert the object into a dict
get_apk_details_response_dict = get_apk_details_response_instance.to_dict()
# create an instance of GetApkDetailsResponse from a dict
get_apk_details_response_from_dict = GetApkDetailsResponse.from_dict(get_apk_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


