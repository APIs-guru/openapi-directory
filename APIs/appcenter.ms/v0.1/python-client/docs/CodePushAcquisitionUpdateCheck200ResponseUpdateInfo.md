# CodePushAcquisitionUpdateCheck200ResponseUpdateInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**is_disabled** | **bool** |  | [optional] 
**is_mandatory** | **bool** |  | [optional] 
**rollout** | **int** |  | [optional] 
**target_binary_range** | **str** |  | [optional] 
**download_url** | **str** |  | [optional] 
**is_available** | **bool** |  | 
**label** | **str** |  | [optional] 
**package_hash** | **str** |  | [optional] 
**package_size** | **float** |  | [optional] 
**should_run_binary_version** | **bool** |  | [optional] 
**update_app_version** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.code_push_acquisition_update_check200_response_update_info import CodePushAcquisitionUpdateCheck200ResponseUpdateInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CodePushAcquisitionUpdateCheck200ResponseUpdateInfo from a JSON string
code_push_acquisition_update_check200_response_update_info_instance = CodePushAcquisitionUpdateCheck200ResponseUpdateInfo.from_json(json)
# print the JSON string representation of the object
print(CodePushAcquisitionUpdateCheck200ResponseUpdateInfo.to_json())

# convert the object into a dict
code_push_acquisition_update_check200_response_update_info_dict = code_push_acquisition_update_check200_response_update_info_instance.to_dict()
# create an instance of CodePushAcquisitionUpdateCheck200ResponseUpdateInfo from a dict
code_push_acquisition_update_check200_response_update_info_from_dict = CodePushAcquisitionUpdateCheck200ResponseUpdateInfo.from_dict(code_push_acquisition_update_check200_response_update_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


