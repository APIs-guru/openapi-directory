# LabProperties

Properties of a Lab.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by_object_id** | **str** | Object id of the user that created the lab. | [optional] [readonly] 
**created_by_user_principal_name** | **str** | Lab creator name | [optional] [readonly] 
**created_date** | **datetime** | Creation date for the lab | [optional] [readonly] 
**invitation_code** | **str** | Invitation code that users can use to join a lab. | [optional] [readonly] 
**latest_operation_result** | [**LatestOperationResult**](LatestOperationResult.md) |  | [optional] 
**max_users_in_lab** | **int** | Maximum number of users allowed in the lab. | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] 
**usage_quota** | **str** | Maximum duration a user can use an environment for in the lab. | [optional] 
**user_access_mode** | **str** | Lab user access mode (open to all vs. restricted to those listed on the lab). | [optional] 
**user_quota** | **int** | Maximum value MaxUsersInLab can be set to, as specified by the service | [optional] [readonly] 

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


