# Apk


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binary** | [**ApkBinary**](ApkBinary.md) |  | [optional] 
**version_code** | **int** | The version code of the APK, as specified in the APK&#39;s manifest file. | [optional] 

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


