# UpdateInfoData


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
from openapi_client.models.update_info_data import UpdateInfoData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateInfoData from a JSON string
update_info_data_instance = UpdateInfoData.from_json(json)
# print the JSON string representation of the object
print(UpdateInfoData.to_json())

# convert the object into a dict
update_info_data_dict = update_info_data_instance.to_dict()
# create an instance of UpdateInfoData from a dict
update_info_data_from_dict = UpdateInfoData.from_dict(update_info_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


