# RoutingAppCoverageUpdateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppScreenshotUpdateRequestDataAttributes**](AppScreenshotUpdateRequestDataAttributes.md) |  | [optional] 
**id** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.routing_app_coverage_update_request_data import RoutingAppCoverageUpdateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingAppCoverageUpdateRequestData from a JSON string
routing_app_coverage_update_request_data_instance = RoutingAppCoverageUpdateRequestData.from_json(json)
# print the JSON string representation of the object
print(RoutingAppCoverageUpdateRequestData.to_json())

# convert the object into a dict
routing_app_coverage_update_request_data_dict = routing_app_coverage_update_request_data_instance.to_dict()
# create an instance of RoutingAppCoverageUpdateRequestData from a dict
routing_app_coverage_update_request_data_from_dict = RoutingAppCoverageUpdateRequestData.from_dict(routing_app_coverage_update_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


