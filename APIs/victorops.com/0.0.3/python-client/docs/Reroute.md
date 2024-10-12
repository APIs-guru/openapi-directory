# Reroute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**incident_number** | **str** |  | 
**targets** | [**List[IncidentTarget]**](IncidentTarget.md) |  | 

## Example

```python
from openapi_client.models.reroute import Reroute

# TODO update the JSON string below
json = "{}"
# create an instance of Reroute from a JSON string
reroute_instance = Reroute.from_json(json)
# print the JSON string representation of the object
print(Reroute.to_json())

# convert the object into a dict
reroute_dict = reroute_instance.to_dict()
# create an instance of Reroute from a dict
reroute_from_dict = Reroute.from_dict(reroute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


