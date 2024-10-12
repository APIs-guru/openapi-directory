# TrafficTarget

TrafficTarget holds a single entry of the routing table for a Route.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration_name** | **str** | [Deprecated] Not supported in Cloud Run. It must be empty. | [optional] 
**latest_revision** | **bool** | Uses the \&quot;status.latestReadyRevisionName\&quot; of the Service to determine the traffic target. When it changes, traffic will automatically migrate from the prior \&quot;latest ready\&quot; revision to the new one. This field must be false if RevisionName is set. This field defaults to true otherwise. If the field is set to true on Status, this means that the Revision was resolved from the Service&#39;s latest ready revision. | [optional] 
**percent** | **int** | Percent specifies percent of the traffic to this Revision or Configuration. This defaults to zero if unspecified. | [optional] 
**revision_name** | **str** | Points this traffic target to a specific Revision. This field is mutually exclusive with latest_revision. | [optional] 
**tag** | **str** | Tag is used to expose a dedicated url for referencing this target exclusively. | [optional] 
**url** | **str** | Output only. URL displays the URL for accessing tagged traffic targets. URL is displayed in status, and is disallowed on spec. URL must contain a scheme (e.g. https://) and a hostname, but may not contain anything else (e.g. basic auth, url path, etc.) | [optional] [readonly] 

## Example

```python
from openapi_client.models.traffic_target import TrafficTarget

# TODO update the JSON string below
json = "{}"
# create an instance of TrafficTarget from a JSON string
traffic_target_instance = TrafficTarget.from_json(json)
# print the JSON string representation of the object
print(TrafficTarget.to_json())

# convert the object into a dict
traffic_target_dict = traffic_target_instance.to_dict()
# create an instance of TrafficTarget from a dict
traffic_target_from_dict = TrafficTarget.from_dict(traffic_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


