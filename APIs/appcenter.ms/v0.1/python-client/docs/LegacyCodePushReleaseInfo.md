# LegacyCodePushReleaseInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_version** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**is_disabled** | **bool** |  | [optional] 
**is_mandatory** | **bool** |  | [optional] 
**rollout** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.legacy_code_push_release_info import LegacyCodePushReleaseInfo

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyCodePushReleaseInfo from a JSON string
legacy_code_push_release_info_instance = LegacyCodePushReleaseInfo.from_json(json)
# print the JSON string representation of the object
print(LegacyCodePushReleaseInfo.to_json())

# convert the object into a dict
legacy_code_push_release_info_dict = legacy_code_push_release_info_instance.to_dict()
# create an instance of LegacyCodePushReleaseInfo from a dict
legacy_code_push_release_info_from_dict = LegacyCodePushReleaseInfo.from_dict(legacy_code_push_release_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


