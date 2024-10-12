# LabAccountPropertiesFragment

Properties of a Lab Account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled_region_selection** | **bool** | Represents if region selection is enabled | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] 

## Example

```python
from openapi_client.models.lab_account_properties_fragment import LabAccountPropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of LabAccountPropertiesFragment from a JSON string
lab_account_properties_fragment_instance = LabAccountPropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(LabAccountPropertiesFragment.to_json())

# convert the object into a dict
lab_account_properties_fragment_dict = lab_account_properties_fragment_instance.to_dict()
# create an instance of LabAccountPropertiesFragment from a dict
lab_account_properties_fragment_from_dict = LabAccountPropertiesFragment.from_dict(lab_account_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


