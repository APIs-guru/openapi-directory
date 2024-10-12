# LabProperties

Properties of a lab.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifacts_storage_account** | **str** | The artifact storage account of the lab. | [optional] 
**created_date** | **datetime** | The creation date of the lab. | [optional] 
**default_storage_account** | **str** | The lab&#39;s default storage account. | [optional] 
**default_virtual_network_id** | **str** | The default virtual network identifier of the lab. | [optional] 
**lab_storage_type** | **str** | The type of the lab storage. | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**storage_accounts** | **List[str]** | The storage accounts of the lab. | [optional] 
**vault_name** | **str** | The name of the key vault of the lab. | [optional] 

## Example

```python
from openapi_client.models.lab_properties import LabProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LabProperties from a JSON string
lab_properties_instance = LabProperties.from_json(json)
# print the JSON string representation of the object
print(LabProperties.to_json())

# convert the object into a dict
lab_properties_dict = lab_properties_instance.to_dict()
# create an instance of LabProperties from a dict
lab_properties_from_dict = LabProperties.from_dict(lab_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


