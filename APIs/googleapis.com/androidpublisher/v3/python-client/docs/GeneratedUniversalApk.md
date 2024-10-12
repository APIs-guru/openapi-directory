# GeneratedUniversalApk

Download metadata for a universal APK.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_id** | **str** | Download ID, which uniquely identifies the APK to download. Should be supplied to &#x60;generatedapks.download&#x60; method. | [optional] 

## Example

```python
from openapi_client.models.generated_universal_apk import GeneratedUniversalApk

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratedUniversalApk from a JSON string
generated_universal_apk_instance = GeneratedUniversalApk.from_json(json)
# print the JSON string representation of the object
print(GeneratedUniversalApk.to_json())

# convert the object into a dict
generated_universal_apk_dict = generated_universal_apk_instance.to_dict()
# create an instance of GeneratedUniversalApk from a dict
generated_universal_apk_from_dict = GeneratedUniversalApk.from_dict(generated_universal_apk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


