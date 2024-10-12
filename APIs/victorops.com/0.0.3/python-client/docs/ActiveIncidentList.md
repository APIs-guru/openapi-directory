# ActiveIncidentList

The list of incidents in various states

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**incidents** | [**List[ActiveIncidentInfo]**](ActiveIncidentInfo.md) | The incident data | [optional] 

## Example

```python
from openapi_client.models.active_incident_list import ActiveIncidentList

# TODO update the JSON string below
json = "{}"
# create an instance of ActiveIncidentList from a JSON string
active_incident_list_instance = ActiveIncidentList.from_json(json)
# print the JSON string representation of the object
print(ActiveIncidentList.to_json())

# convert the object into a dict
active_incident_list_dict = active_incident_list_instance.to_dict()
# create an instance of ActiveIncidentList from a dict
active_incident_list_from_dict = ActiveIncidentList.from_dict(active_incident_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


