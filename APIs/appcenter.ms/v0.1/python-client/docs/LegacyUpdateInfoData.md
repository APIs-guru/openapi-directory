# LegacyUpdateInfoData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_version** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**is_disabled** | **bool** |  | [optional] 
**is_mandatory** | **bool** |  | [optional] 
**rollout** | **int** |  | [optional] 
**download_url** | **str** |  | [optional] 
**is_available** | **bool** |  | 
**label** | **str** |  | [optional] 
**package_hash** | **str** |  | [optional] 
**package_size** | **float** |  | [optional] 
**should_run_binary_version** | **bool** |  | [optional] 
**update_app_version** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.legacy_update_info_data import LegacyUpdateInfoData

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyUpdateInfoData from a JSON string
legacy_update_info_data_instance = LegacyUpdateInfoData.from_json(json)
# print the JSON string representation of the object
print(LegacyUpdateInfoData.to_json())

# convert the object into a dict
legacy_update_info_data_dict = legacy_update_info_data_instance.to_dict()
# create an instance of LegacyUpdateInfoData from a dict
legacy_update_info_data_from_dict = LegacyUpdateInfoData.from_dict(legacy_update_info_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


