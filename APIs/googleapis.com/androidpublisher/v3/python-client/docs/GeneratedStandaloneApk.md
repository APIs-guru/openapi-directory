# GeneratedStandaloneApk

Download metadata for a standalone APK.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_id** | **str** | Download ID, which uniquely identifies the APK to download. Should be supplied to &#x60;generatedapks.download&#x60; method. | [optional] 
**variant_id** | **int** | ID of the generated variant. | [optional] 

## Example

```python
from openapi_client.models.generated_standalone_apk import GeneratedStandaloneApk

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratedStandaloneApk from a JSON string
generated_standalone_apk_instance = GeneratedStandaloneApk.from_json(json)
# print the JSON string representation of the object
print(GeneratedStandaloneApk.to_json())

# convert the object into a dict
generated_standalone_apk_dict = generated_standalone_apk_instance.to_dict()
# create an instance of GeneratedStandaloneApk from a dict
generated_standalone_apk_from_dict = GeneratedStandaloneApk.from_dict(generated_standalone_apk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


