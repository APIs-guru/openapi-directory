# RemoteInAppUpdateDataPerBundle

Data related to the recovery action at bundle level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recovered_device_count** | **str** | Total number of devices which have been rescued. | [optional] 
**total_device_count** | **str** | Total number of devices affected by this recovery action associated with bundle of the app. | [optional] 
**version_code** | **str** | Version Code corresponding to the target bundle. | [optional] 

## Example

```python
from openapi_client.models.remote_in_app_update_data_per_bundle import RemoteInAppUpdateDataPerBundle

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteInAppUpdateDataPerBundle from a JSON string
remote_in_app_update_data_per_bundle_instance = RemoteInAppUpdateDataPerBundle.from_json(json)
# print the JSON string representation of the object
print(RemoteInAppUpdateDataPerBundle.to_json())

# convert the object into a dict
remote_in_app_update_data_per_bundle_dict = remote_in_app_update_data_per_bundle_instance.to_dict()
# create an instance of RemoteInAppUpdateDataPerBundle from a dict
remote_in_app_update_data_per_bundle_from_dict = RemoteInAppUpdateDataPerBundle.from_dict(remote_in_app_update_data_per_bundle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


