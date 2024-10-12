# LabPropertiesFragment

Properties of a lab.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lab_storage_type** | **str** | Type of storage used by the lab. It can be either Premium or Standard. Default is Premium. | [optional] 
**premium_data_disks** | **str** | The setting to enable usage of premium data disks.  When its value is &#39;Enabled&#39;, creation of standard or premium data disks is allowed.  When its value is &#39;Disabled&#39;, only creation of standard data disks is allowed. | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] 

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


