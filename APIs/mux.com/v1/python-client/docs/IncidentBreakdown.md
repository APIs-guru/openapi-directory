# IncidentBreakdown


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.incident_breakdown import IncidentBreakdown

# TODO update the JSON string below
json = "{}"
# create an instance of IncidentBreakdown from a JSON string
incident_breakdown_instance = IncidentBreakdown.from_json(json)
# print the JSON string representation of the object
print(IncidentBreakdown.to_json())

# convert the object into a dict
incident_breakdown_dict = incident_breakdown_instance.to_dict()
# create an instance of IncidentBreakdown from a dict
incident_breakdown_from_dict = IncidentBreakdown.from_dict(incident_breakdown_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


