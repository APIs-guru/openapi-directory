# MAMPolicyProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_recheck_offline_timeout** | **str** |  | [optional] 
**access_recheck_online_timeout** | **str** |  | [optional] 
**app_sharing_from_level** | **str** |  | [optional] [default to 'none']
**app_sharing_to_level** | **str** |  | [optional] [default to 'none']
**authentication** | **str** |  | [optional] [default to 'required']
**clipboard_sharing_level** | **str** |  | [optional] [default to 'blocked']
**data_backup** | **str** |  | [optional] [default to 'allow']
**description** | **str** |  | [optional] 
**device_compliance** | **str** |  | [optional] [default to 'enable']
**file_sharing_save_as** | **str** |  | [optional] [default to 'allow']
**friendly_name** | **str** |  | 
**group_status** | **str** |  | [optional] [readonly] [default to 'notTargeted']
**last_modified_time** | **datetime** |  | [optional] [readonly] 
**managed_browser** | **str** |  | [optional] [default to 'required']
**num_of_apps** | **int** |  | [optional] [readonly] 
**offline_wipe_timeout** | **str** |  | [optional] 
**pin** | **str** |  | [optional] [default to 'required']
**pin_num_retry** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.mam_policy_properties import MAMPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MAMPolicyProperties from a JSON string
mam_policy_properties_instance = MAMPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(MAMPolicyProperties.to_json())

# convert the object into a dict
mam_policy_properties_dict = mam_policy_properties_instance.to_dict()
# create an instance of MAMPolicyProperties from a dict
mam_policy_properties_from_dict = MAMPolicyProperties.from_dict(mam_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


