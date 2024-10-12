# AppBundle

An Android App Bundle file format, containing a BundleConfig.pb file, a base module directory, zero or more dynamic feature module directories. See https://developer.android.com/guide/app-bundle/build for guidance on building App Bundles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_location** | [**FileReference**](FileReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_bundle import AppBundle

# TODO update the JSON string below
json = "{}"
# create an instance of AppBundle from a JSON string
app_bundle_instance = AppBundle.from_json(json)
# print the JSON string representation of the object
print(AppBundle.to_json())

# convert the object into a dict
app_bundle_dict = app_bundle_instance.to_dict()
# create an instance of AppBundle from a dict
app_bundle_from_dict = AppBundle.from_dict(app_bundle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


