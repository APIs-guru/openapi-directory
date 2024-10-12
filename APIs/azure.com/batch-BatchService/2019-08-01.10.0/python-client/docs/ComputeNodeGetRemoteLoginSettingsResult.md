# ComputeNodeGetRemoteLoginSettingsResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remote_login_ip_address** | **str** |  | 
**remote_login_port** | **int** |  | 

## Example

```python
from openapi_client.models.compute_node_get_remote_login_settings_result import ComputeNodeGetRemoteLoginSettingsResult

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeNodeGetRemoteLoginSettingsResult from a JSON string
compute_node_get_remote_login_settings_result_instance = ComputeNodeGetRemoteLoginSettingsResult.from_json(json)
# print the JSON string representation of the object
print(ComputeNodeGetRemoteLoginSettingsResult.to_json())

# convert the object into a dict
compute_node_get_remote_login_settings_result_dict = compute_node_get_remote_login_settings_result_instance.to_dict()
# create an instance of ComputeNodeGetRemoteLoginSettingsResult from a dict
compute_node_get_remote_login_settings_result_from_dict = ComputeNodeGetRemoteLoginSettingsResult.from_dict(compute_node_get_remote_login_settings_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


