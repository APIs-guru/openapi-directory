# Apk

An Android package file to install.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | [**FileReference**](FileReference.md) |  | [optional] 
**package_name** | **str** | The java package for the APK to be installed. Value is determined by examining the application&#39;s manifest. | [optional] 

## Example

```python
from openapi_client.models.apk import Apk

# TODO update the JSON string below
json = "{}"
# create an instance of Apk from a JSON string
apk_instance = Apk.from_json(json)
# print the JSON string representation of the object
print(Apk.to_json())

# convert the object into a dict
apk_dict = apk_instance.to_dict()
# create an instance of Apk from a dict
apk_from_dict = Apk.from_dict(apk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


