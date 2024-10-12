# ListRelatedIncidentsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Incident]**](Incident.md) |  | [optional] 
**timeframe** | **List[int]** |  | [optional] 
**total_row_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.list_related_incidents_response import ListRelatedIncidentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRelatedIncidentsResponse from a JSON string
list_related_incidents_response_instance = ListRelatedIncidentsResponse.from_json(json)
# print the JSON string representation of the object
print(ListRelatedIncidentsResponse.to_json())

# convert the object into a dict
list_related_incidents_response_dict = list_related_incidents_response_instance.to_dict()
# create an instance of ListRelatedIncidentsResponse from a dict
list_related_incidents_response_from_dict = ListRelatedIncidentsResponse.from_dict(list_related_incidents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


