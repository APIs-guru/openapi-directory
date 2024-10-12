# IncidentList

The results of an incident history request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**incidents** | [**List[IncidentInfo]**](IncidentInfo.md) | An array of incident objects matching the search | [optional] 
**limit** | **float** | The limit value passed in the request | [optional] 
**offset** | **float** | The offset passed in the request | [optional] 
**total** | **float** | The total number of incidents available for this search | [optional] 

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


