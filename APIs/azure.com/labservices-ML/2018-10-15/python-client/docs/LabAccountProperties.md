# LabAccountProperties

Properties of a Lab Account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled_region_selection** | **bool** | Represents if region selection is enabled | [optional] 
**latest_operation_result** | [**LatestOperationResult**](LatestOperationResult.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**size_configuration** | [**SizeConfigurationProperties**](SizeConfigurationProperties.md) |  | [optional] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] 

## Example

```python
from openapi_client.models.lab_account_properties import LabAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LabAccountProperties from a JSON string
lab_account_properties_instance = LabAccountProperties.from_json(json)
# print the JSON string representation of the object
print(LabAccountProperties.to_json())

# convert the object into a dict
lab_account_properties_dict = lab_account_properties_instance.to_dict()
# create an instance of LabAccountProperties from a dict
lab_account_properties_from_dict = LabAccountProperties.from_dict(lab_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


