# IncidentList

A widget that displays a list of incidents

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monitored_resources** | [**List[MonitoredResource]**](MonitoredResource.md) | Optional. The monitored resource for which incidents are listed. The resource doesn&#39;t need to be fully specified. That is, you can specify the resource type but not the values of the resource labels. The resource type and labels are used for filtering. | [optional] 
**policy_names** | **List[str]** | Optional. A list of alert policy names to filter the incident list by. Don&#39;t include the project ID prefix in the policy name. For example, use alertPolicies/utilization. | [optional] 

## Example

```python
from openapi_client.models.incident_list import IncidentList

# TODO update the JSON string below
json = "{}"
# create an instance of IncidentList from a JSON string
incident_list_instance = IncidentList.from_json(json)
# print the JSON string representation of the object
print(IncidentList.to_json())

# convert the object into a dict
incident_list_dict = incident_list_instance.to_dict()
# create an instance of IncidentList from a dict
incident_list_from_dict = IncidentList.from_dict(incident_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


