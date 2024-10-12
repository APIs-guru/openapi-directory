# IncidentListResult

The List incidents operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Incident]**](Incident.md) | the incident collection. | [optional] 

## Example

```python
from openapi_client.models.incident_list_result import IncidentListResult

# TODO update the JSON string below
json = "{}"
# create an instance of IncidentListResult from a JSON string
incident_list_result_instance = IncidentListResult.from_json(json)
# print the JSON string representation of the object
print(IncidentListResult.to_json())

# convert the object into a dict
incident_list_result_dict = incident_list_result_instance.to_dict()
# create an instance of IncidentListResult from a dict
incident_list_result_from_dict = IncidentListResult.from_dict(incident_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


