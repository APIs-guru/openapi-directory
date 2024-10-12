# ResourceHealthModel

Health information related to a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_display_name** | **str** | Resource display name. | [optional] 
**resource_location** | **str** | Resource location. | [optional] 
**resource_name** | **str** | Resource name. | [optional] 
**resource_type** | **str** | Resource type. | [optional] 
**resource_uri** | **str** | Gets or sets the resource URI. | [optional] 
**rp_registration_id** | **str** | Gets or sets the resource provider registration ID. | [optional] 
**usage_metrics** | **List[object]** | Usage metrics. | [optional] 
**alert_summary** | [**ResourceHealthModelAllOfAlertSummary**](ResourceHealthModelAllOfAlertSummary.md) |  | [optional] 
**health_state** | **str** | Health state. | [optional] 
**namespace** | **str** | Namespace of the health resource. | [optional] 
**registration_id** | **str** | Registration ID. | [optional] 
**route_prefix** | **str** | Route prefix. | [optional] 

## Example

```python
from openapi_client.models.resource_health_model import ResourceHealthModel

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceHealthModel from a JSON string
resource_health_model_instance = ResourceHealthModel.from_json(json)
# print the JSON string representation of the object
print(ResourceHealthModel.to_json())

# convert the object into a dict
resource_health_model_dict = resource_health_model_instance.to_dict()
# create an instance of ResourceHealthModel from a dict
resource_health_model_from_dict = ResourceHealthModel.from_dict(resource_health_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


