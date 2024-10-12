# ApkDetail

Android application details based on application manifest and archive contents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apk_manifest** | [**ApkManifest**](ApkManifest.md) |  | [optional] 

## Example

```python
from openapi_client.models.apk_detail import ApkDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ApkDetail from a JSON string
apk_detail_instance = ApkDetail.from_json(json)
# print the JSON string representation of the object
print(ApkDetail.to_json())

# convert the object into a dict
apk_detail_dict = apk_detail_instance.to_dict()
# create an instance of ApkDetail from a dict
apk_detail_from_dict = ApkDetail.from_dict(apk_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


