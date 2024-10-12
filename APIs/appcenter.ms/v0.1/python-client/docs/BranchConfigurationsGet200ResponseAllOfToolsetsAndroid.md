# BranchConfigurationsGet200ResponseAllOfToolsetsAndroid

Build configuration for Android projects

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automatic_signing** | **bool** | Whether to apply automatic signing or not | [optional] 
**build_variant** | **str** | The Android build variant to build | [optional] 
**gradle_wrapper_path** | **str** | Path to the Gradle wrapper script | [optional] 
**is_root** | **bool** | Whether it is the root module or not | [optional] 
**key_alias** | **str** | The key alias | [optional] 
**key_password** | **str** | The key password | [optional] 
**keystore_encoded** | **str** | The keystore encoded value | [optional] 
**keystore_filename** | **str** | The name of the keystore file | [optional] 
**keystore_password** | **str** | The password of the keystore | [optional] 
**module** | **str** | The Gradle module to build | [optional] 
**run_lint** | **bool** | Whether to run lint checks during the build (default) | [optional] 
**run_tests** | **bool** | Whether to run unit tests during the build (default) | [optional] [default to True]

## Example

```python
from openapi_client.models.branch_configurations_get200_response_all_of_toolsets_android import BranchConfigurationsGet200ResponseAllOfToolsetsAndroid

# TODO update the JSON string below
json = "{}"
# create an instance of BranchConfigurationsGet200ResponseAllOfToolsetsAndroid from a JSON string
branch_configurations_get200_response_all_of_toolsets_android_instance = BranchConfigurationsGet200ResponseAllOfToolsetsAndroid.from_json(json)
# print the JSON string representation of the object
print(BranchConfigurationsGet200ResponseAllOfToolsetsAndroid.to_json())

# convert the object into a dict
branch_configurations_get200_response_all_of_toolsets_android_dict = branch_configurations_get200_response_all_of_toolsets_android_instance.to_dict()
# create an instance of BranchConfigurationsGet200ResponseAllOfToolsetsAndroid from a dict
branch_configurations_get200_response_all_of_toolsets_android_from_dict = BranchConfigurationsGet200ResponseAllOfToolsetsAndroid.from_dict(branch_configurations_get200_response_all_of_toolsets_android_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


