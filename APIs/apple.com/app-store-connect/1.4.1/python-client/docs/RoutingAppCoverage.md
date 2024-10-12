# RoutingAppCoverage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppStoreReviewAttachmentAttributes**](AppStoreReviewAttachmentAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppStoreVersionSubmissionRelationships**](AppStoreVersionSubmissionRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.routing_app_coverage import RoutingAppCoverage

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingAppCoverage from a JSON string
routing_app_coverage_instance = RoutingAppCoverage.from_json(json)
# print the JSON string representation of the object
print(RoutingAppCoverage.to_json())

# convert the object into a dict
routing_app_coverage_dict = routing_app_coverage_instance.to_dict()
# create an instance of RoutingAppCoverage from a dict
routing_app_coverage_from_dict = RoutingAppCoverage.from_dict(routing_app_coverage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


