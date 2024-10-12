# RoutingAppCoverageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**RoutingAppCoverage**](RoutingAppCoverage.md) |  | 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.routing_app_coverage_response import RoutingAppCoverageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingAppCoverageResponse from a JSON string
routing_app_coverage_response_instance = RoutingAppCoverageResponse.from_json(json)
# print the JSON string representation of the object
print(RoutingAppCoverageResponse.to_json())

# convert the object into a dict
routing_app_coverage_response_dict = routing_app_coverage_response_instance.to_dict()
# create an instance of RoutingAppCoverageResponse from a dict
routing_app_coverage_response_from_dict = RoutingAppCoverageResponse.from_dict(routing_app_coverage_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


