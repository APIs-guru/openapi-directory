# GeneratedSplitApk

Download metadata for a split APK.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_id** | **str** | Download ID, which uniquely identifies the APK to download. Should be supplied to &#x60;generatedapks.download&#x60; method. | [optional] 
**module_name** | **str** | Name of the module that this APK belongs to. | [optional] 
**split_id** | **str** | Split ID. Empty for the main split of the base module. | [optional] 
**variant_id** | **int** | ID of the generated variant. | [optional] 

## Example

```python
from openapi_client.models.generated_split_apk import GeneratedSplitApk

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratedSplitApk from a JSON string
generated_split_apk_instance = GeneratedSplitApk.from_json(json)
# print the JSON string representation of the object
print(GeneratedSplitApk.to_json())

# convert the object into a dict
generated_split_apk_dict = generated_split_apk_instance.to_dict()
# create an instance of GeneratedSplitApk from a dict
generated_split_apk_from_dict = GeneratedSplitApk.from_dict(generated_split_apk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


