# RerouteStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**incident_number** | **str** |  | 
**message** | **str** |  | [optional] 
**success** | **bool** |  | 
**target_status** | [**List[RerouteTargetStatus]**](RerouteTargetStatus.md) |  | 

## Example

```python
from openapi_client.models.reroute_status import RerouteStatus

# TODO update the JSON string below
json = "{}"
# create an instance of RerouteStatus from a JSON string
reroute_status_instance = RerouteStatus.from_json(json)
# print the JSON string representation of the object
print(RerouteStatus.to_json())

# convert the object into a dict
reroute_status_dict = reroute_status_instance.to_dict()
# create an instance of RerouteStatus from a dict
reroute_status_from_dict = RerouteStatus.from_dict(reroute_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


