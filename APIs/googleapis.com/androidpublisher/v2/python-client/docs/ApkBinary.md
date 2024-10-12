# ApkBinary

Represents the binary payload of an APK.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sha1** | **str** | A sha1 hash of the APK payload, encoded as a hex string and matching the output of the sha1sum command. | [optional] 
**sha256** | **str** | A sha256 hash of the APK payload, encoded as a hex string and matching the output of the sha256sum command. | [optional] 

## Example

```python
from openapi_client.models.apk_binary import ApkBinary

# TODO update the JSON string below
json = "{}"
# create an instance of ApkBinary from a JSON string
apk_binary_instance = ApkBinary.from_json(json)
# print the JSON string representation of the object
print(ApkBinary.to_json())

# convert the object into a dict
apk_binary_dict = apk_binary_instance.to_dict()
# create an instance of ApkBinary from a dict
apk_binary_from_dict = ApkBinary.from_dict(apk_binary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


