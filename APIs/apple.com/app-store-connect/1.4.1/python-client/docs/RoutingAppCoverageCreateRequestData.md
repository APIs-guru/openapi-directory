# RoutingAppCoverageCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppScreenshotCreateRequestDataAttributes**](AppScreenshotCreateRequestDataAttributes.md) |  | 
**relationships** | [**AppStoreReviewDetailCreateRequestDataRelationships**](AppStoreReviewDetailCreateRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.routing_app_coverage_create_request_data import RoutingAppCoverageCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingAppCoverageCreateRequestData from a JSON string
routing_app_coverage_create_request_data_instance = RoutingAppCoverageCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(RoutingAppCoverageCreateRequestData.to_json())

# convert the object into a dict
routing_app_coverage_create_request_data_dict = routing_app_coverage_create_request_data_instance.to_dict()
# create an instance of RoutingAppCoverageCreateRequestData from a dict
routing_app_coverage_create_request_data_from_dict = RoutingAppCoverageCreateRequestData.from_dict(routing_app_coverage_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


