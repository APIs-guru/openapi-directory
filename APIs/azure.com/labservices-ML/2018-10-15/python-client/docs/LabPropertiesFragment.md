# LabPropertiesFragment

Properties of a Lab.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_users_in_lab** | **int** | Maximum number of users allowed in the lab. | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] 
**usage_quota** | **str** | Maximum duration a user can use an environment for in the lab. | [optional] 
**user_access_mode** | **str** | Lab user access mode (open to all vs. restricted to those listed on the lab). | [optional] 

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


