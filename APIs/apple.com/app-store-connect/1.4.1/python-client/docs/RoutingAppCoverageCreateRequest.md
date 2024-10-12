# RoutingAppCoverageCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**RoutingAppCoverageCreateRequestData**](RoutingAppCoverageCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.routing_app_coverage_create_request import RoutingAppCoverageCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingAppCoverageCreateRequest from a JSON string
routing_app_coverage_create_request_instance = RoutingAppCoverageCreateRequest.from_json(json)
# print the JSON string representation of the object
print(RoutingAppCoverageCreateRequest.to_json())

# convert the object into a dict
routing_app_coverage_create_request_dict = routing_app_coverage_create_request_instance.to_dict()
# create an instance of RoutingAppCoverageCreateRequest from a dict
routing_app_coverage_create_request_from_dict = RoutingAppCoverageCreateRequest.from_dict(routing_app_coverage_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


