# RerouteStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**statuses** | [**List[RerouteStatus]**](RerouteStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.reroute_status_response import RerouteStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RerouteStatusResponse from a JSON string
reroute_status_response_instance = RerouteStatusResponse.from_json(json)
# print the JSON string representation of the object
print(RerouteStatusResponse.to_json())

# convert the object into a dict
reroute_status_response_dict = reroute_status_response_instance.to_dict()
# create an instance of RerouteStatusResponse from a dict
reroute_status_response_from_dict = RerouteStatusResponse.from_dict(reroute_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


