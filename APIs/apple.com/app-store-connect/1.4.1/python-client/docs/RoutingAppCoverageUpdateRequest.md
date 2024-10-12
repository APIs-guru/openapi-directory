# RoutingAppCoverageUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**RoutingAppCoverageUpdateRequestData**](RoutingAppCoverageUpdateRequestData.md) |  | 

## Example

```python
from openapi_client.models.routing_app_coverage_update_request import RoutingAppCoverageUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingAppCoverageUpdateRequest from a JSON string
routing_app_coverage_update_request_instance = RoutingAppCoverageUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(RoutingAppCoverageUpdateRequest.to_json())

# convert the object into a dict
routing_app_coverage_update_request_dict = routing_app_coverage_update_request_instance.to_dict()
# create an instance of RoutingAppCoverageUpdateRequest from a dict
routing_app_coverage_update_request_from_dict = RoutingAppCoverageUpdateRequest.from_dict(routing_app_coverage_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


