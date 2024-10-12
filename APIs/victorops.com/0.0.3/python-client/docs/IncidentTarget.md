# IncidentTarget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slug** | **str** | User name or escalation policy slug | 
**type** | **str** | Type of target | 

## Example

```python
from openapi_client.models.incident_target import IncidentTarget

# TODO update the JSON string below
json = "{}"
# create an instance of IncidentTarget from a JSON string
incident_target_instance = IncidentTarget.from_json(json)
# print the JSON string representation of the object
print(IncidentTarget.to_json())

# convert the object into a dict
incident_target_dict = incident_target_instance.to_dict()
# create an instance of IncidentTarget from a dict
incident_target_from_dict = IncidentTarget.from_dict(incident_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


