# SdkVersion

The version of the SDK used to run the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bugs** | [**List[SdkBug]**](SdkBug.md) | Output only. Known bugs found in this SDK version. | [optional] [readonly] 
**sdk_support_status** | **str** | The support status for this SDK version. | [optional] 
**version** | **str** | The version of the SDK used to run the job. | [optional] 
**version_display_name** | **str** | A readable string describing the version of the SDK. | [optional] 

## Example

```python
from openapi_client.models.sdk_version import SdkVersion

# TODO update the JSON string below
json = "{}"
# create an instance of SdkVersion from a JSON string
sdk_version_instance = SdkVersion.from_json(json)
# print the JSON string representation of the object
print(SdkVersion.to_json())

# convert the object into a dict
sdk_version_dict = sdk_version_instance.to_dict()
# create an instance of SdkVersion from a dict
sdk_version_from_dict = SdkVersion.from_dict(sdk_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


