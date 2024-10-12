# V2AndroidApplication

Identifier of an Android application for key use.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_name** | **str** | The package name of the application. | [optional] 
**sha1_fingerprint** | **str** | The SHA1 fingerprint of the application. For example, both sha1 formats are acceptable : DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09 or DA39A3EE5E6B4B0D3255BFEF95601890AFD80709. Output format is the latter. | [optional] 

## Example

```python
from openapi_client.models.v2_android_application import V2AndroidApplication

# TODO update the JSON string below
json = "{}"
# create an instance of V2AndroidApplication from a JSON string
v2_android_application_instance = V2AndroidApplication.from_json(json)
# print the JSON string representation of the object
print(V2AndroidApplication.to_json())

# convert the object into a dict
v2_android_application_dict = v2_android_application_instance.to_dict()
# create an instance of V2AndroidApplication from a dict
v2_android_application_from_dict = V2AndroidApplication.from_dict(v2_android_application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


