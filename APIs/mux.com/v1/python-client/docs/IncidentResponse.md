# IncidentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Incident**](Incident.md) |  | [optional] 
**timeframe** | **List[int]** |  | [optional] 

## Example

```python
from openapi_client.models.incident_response import IncidentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IncidentResponse from a JSON string
incident_response_instance = IncidentResponse.from_json(json)
# print the JSON string representation of the object
print(IncidentResponse.to_json())

# convert the object into a dict
incident_response_dict = incident_response_instance.to_dict()
# create an instance of IncidentResponse from a dict
incident_response_from_dict = IncidentResponse.from_dict(incident_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


