# CreatedIncident


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | An error message | [optional] 
**incident_number** | **str** | The VictorOps incident number | [optional] 

## Example

```python
from openapi_client.models.created_incident import CreatedIncident

# TODO update the JSON string below
json = "{}"
# create an instance of CreatedIncident from a JSON string
created_incident_instance = CreatedIncident.from_json(json)
# print the JSON string representation of the object
print(CreatedIncident.to_json())

# convert the object into a dict
created_incident_dict = created_incident_instance.to_dict()
# create an instance of CreatedIncident from a dict
created_incident_from_dict = CreatedIncident.from_dict(created_incident_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


