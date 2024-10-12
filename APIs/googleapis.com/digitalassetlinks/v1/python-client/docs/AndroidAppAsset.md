# AndroidAppAsset

Describes an android app asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | [**CertificateInfo**](CertificateInfo.md) |  | [optional] 
**package_name** | **str** | Android App assets are naturally identified by their Java package name. For example, the Google Maps app uses the package name &#x60;com.google.android.apps.maps&#x60;. REQUIRED | [optional] 

## Example

```python
from openapi_client.models.android_app_asset import AndroidAppAsset

# TODO update the JSON string below
json = "{}"
# create an instance of AndroidAppAsset from a JSON string
android_app_asset_instance = AndroidAppAsset.from_json(json)
# print the JSON string representation of the object
print(AndroidAppAsset.to_json())

# convert the object into a dict
android_app_asset_dict = android_app_asset_instance.to_dict()
# create an instance of AndroidAppAsset from a dict
android_app_asset_from_dict = AndroidAppAsset.from_dict(android_app_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


