# CreateIncidentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** |  | 
**summary** | **str** |  | 
**targets** | [**List[IncidentTarget]**](IncidentTarget.md) |  | 
**user_name** | **str** |  | 

## Example

```python
from openapi_client.models.create_incident_request import CreateIncidentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateIncidentRequest from a JSON string
create_incident_request_instance = CreateIncidentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateIncidentRequest.to_json())

# convert the object into a dict
create_incident_request_dict = create_incident_request_instance.to_dict()
# create an instance of CreateIncidentRequest from a dict
create_incident_request_from_dict = CreateIncidentRequest.from_dict(create_incident_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


