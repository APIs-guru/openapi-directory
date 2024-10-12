# LabPropertiesFragment

Properties of a lab.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**announcement** | [**LabAnnouncementPropertiesFragment**](LabAnnouncementPropertiesFragment.md) |  | [optional] 
**environment_permission** | **str** | The access rights to be granted to the user when provisioning an environment | [optional] 
**extended_properties** | **Dict[str, str]** | Extended properties of the lab used for experimental features | [optional] 
**lab_storage_type** | **str** | Type of storage used by the lab. It can be either Premium or Standard. Default is Premium. | [optional] 
**mandatory_artifacts_resource_ids_linux** | **List[str]** | The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user. | [optional] 
**mandatory_artifacts_resource_ids_windows** | **List[str]** | The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user. | [optional] 
**premium_data_disks** | **str** | The setting to enable usage of premium data disks.  When its value is &#39;Enabled&#39;, creation of standard or premium data disks is allowed.  When its value is &#39;Disabled&#39;, only creation of standard data disks is allowed. | [optional] 
**support** | [**LabSupportPropertiesFragment**](LabSupportPropertiesFragment.md) |  | [optional] 

## Example

```python
from openapi_client.models.lab_properties_fragment import LabPropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of LabPropertiesFragment from a JSON string
lab_properties_fragment_instance = LabPropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(LabPropertiesFragment.to_json())

# convert the object into a dict
lab_properties_fragment_dict = lab_properties_fragment_instance.to_dict()
# create an instance of LabPropertiesFragment from a dict
lab_properties_fragment_from_dict = LabPropertiesFragment.from_dict(lab_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


