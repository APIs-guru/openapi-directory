# AlertModel

Contains alert data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_id** | **str** | Gets or sets the ID of the alert. | [optional] 
**alert_properties** | **Dict[str, str]** | Properties of the alert. | [optional] 
**closed_by_user_alias** | **str** | User alias who closed the alert. | [optional] 
**closed_timestamp** | **str** | Timestamp when the alert was closed. | [optional] 
**created_timestamp** | **str** | Timestamp when the alert was created. | [optional] 
**description** | **List[Dict[str, str]]** | Description of the alert. | [optional] 
**fault_id** | **str** | Gets or sets the fault ID of the alert. | [optional] 
**fault_type_id** | **str** | Gets or sets the fault type ID of the alert. | [optional] 
**has_valid_remediation_action** | **bool** | Indicates if the alert can be remediated. | [optional] 
**impacted_resource_display_name** | **str** | Display name for the impacted item. | [optional] 
**impacted_resource_id** | **str** | Gets or sets the Resource ID for the impacted item. | [optional] 
**last_updated_timestamp** | **str** | Timestamp when the alert was last updated. | [optional] 
**remediation** | **List[Dict[str, str]]** | Gets or sets the admin friendly remediation instructions for the alert. | [optional] 
**resource_provider_registration_id** | **str** | Gets or sets the registration ID of the service the alert belongs to. | [optional] 
**resource_registration_id** | **str** | Gets or sets the registration ID of the resource associated with the alert. If the alert is not associated with a resource, the resource registration ID is null. | [optional] 
**severity** | **str** | Severity of the alert. | [optional] 
**state** | **str** | State of the alert. | [optional] 
**title** | **str** | Gets or sets the Resource ID for the impacted item. | [optional] 

## Example

```python
from openapi_client.models.alert_model import AlertModel

# TODO update the JSON string below
json = "{}"
# create an instance of AlertModel from a JSON string
alert_model_instance = AlertModel.from_json(json)
# print the JSON string representation of the object
print(AlertModel.to_json())

# convert the object into a dict
alert_model_dict = alert_model_instance.to_dict()
# create an instance of AlertModel from a dict
alert_model_from_dict = AlertModel.from_dict(alert_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


