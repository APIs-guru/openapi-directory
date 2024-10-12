# StoresBasicReleaseDetails

Basic information on a release

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_type** | **str** | Destination for this release. | [optional] 
**distribution_stores** | [**List[StoreReleasesList200ResponseInnerDistributionStoresInner]**](StoreReleasesList200ResponseInnerDistributionStoresInner.md) | a list of distribution stores that are associated with this release. | [optional] 
**id** | **float** | ID identifying this unique release. | [optional] 
**short_version** | **str** | The release&#39;s short version. For iOS: CFBundleShortVersionString from info.plist. For Android: android:versionName from AppManifest.xml.  | [optional] 
**uploaded_at** | **str** | UTC time in ISO 8601 format of the uploaded time. | [optional] 
**version** | **str** | The release&#39;s version. For iOS: CFBundleVersion from info.plist. For Android: android:versionCode from AppManifest.xml.  | [optional] 

## Example

```python
from openapi_client.models.stores_basic_release_details import StoresBasicReleaseDetails

# TODO update the JSON string below
json = "{}"
# create an instance of StoresBasicReleaseDetails from a JSON string
stores_basic_release_details_instance = StoresBasicReleaseDetails.from_json(json)
# print the JSON string representation of the object
print(StoresBasicReleaseDetails.to_json())

# convert the object into a dict
stores_basic_release_details_dict = stores_basic_release_details_instance.to_dict()
# create an instance of StoresBasicReleaseDetails from a dict
stores_basic_release_details_from_dict = StoresBasicReleaseDetails.from_dict(stores_basic_release_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


