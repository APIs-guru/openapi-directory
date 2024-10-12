# BaseHealth

Models the base properties for health resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_summary** | [**AlertSummary**](AlertSummary.md) |  | [optional] 
**health_state** | **str** | Health state. | [optional] 
**namespace** | **str** | Namespace of the health resource. | [optional] 
**registration_id** | **str** | Registration ID. | [optional] 
**route_prefix** | **str** | Route prefix. | [optional] 

## Example

```python
from openapi_client.models.base_health import BaseHealth

# TODO update the JSON string below
json = "{}"
# create an instance of BaseHealth from a JSON string
base_health_instance = BaseHealth.from_json(json)
# print the JSON string representation of the object
print(BaseHealth.to_json())

# convert the object into a dict
base_health_dict = base_health_instance.to_dict()
# create an instance of BaseHealth from a dict
base_health_from_dict = BaseHealth.from_dict(base_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


