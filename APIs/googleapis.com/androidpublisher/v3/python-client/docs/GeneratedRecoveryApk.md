# GeneratedRecoveryApk

Download metadata for an app recovery module.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_id** | **str** | Download ID, which uniquely identifies the APK to download. Should be supplied to &#x60;generatedapks.download&#x60; method. | [optional] 
**module_name** | **str** | Name of the module which recovery apk belongs to. | [optional] 
**recovery_id** | **str** | ID of the recovery action. | [optional] 
**recovery_status** | **str** | The status of the recovery action corresponding to the recovery apk. | [optional] 

## Example

```python
from openapi_client.models.generated_recovery_apk import GeneratedRecoveryApk

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratedRecoveryApk from a JSON string
generated_recovery_apk_instance = GeneratedRecoveryApk.from_json(json)
# print the JSON string representation of the object
print(GeneratedRecoveryApk.to_json())

# convert the object into a dict
generated_recovery_apk_dict = generated_recovery_apk_instance.to_dict()
# create an instance of GeneratedRecoveryApk from a dict
generated_recovery_apk_from_dict = GeneratedRecoveryApk.from_dict(generated_recovery_apk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


