# RerouteTargetStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**slug** | **str** | User name or escalation policy slug | 
**success** | **bool** |  | 

## Example

```python
from openapi_client.models.reroute_target_status import RerouteTargetStatus

# TODO update the JSON string below
json = "{}"
# create an instance of RerouteTargetStatus from a JSON string
reroute_target_status_instance = RerouteTargetStatus.from_json(json)
# print the JSON string representation of the object
print(RerouteTargetStatus.to_json())

# convert the object into a dict
reroute_target_status_dict = reroute_target_status_instance.to_dict()
# create an instance of RerouteTargetStatus from a dict
reroute_target_status_from_dict = RerouteTargetStatus.from_dict(reroute_target_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


