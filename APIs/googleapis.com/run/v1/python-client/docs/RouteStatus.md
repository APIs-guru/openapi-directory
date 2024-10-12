# RouteStatus

RouteStatus communicates the observed state of the Route (from the controller).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Addressable**](Addressable.md) |  | [optional] 
**conditions** | [**List[GoogleCloudRunV1Condition]**](GoogleCloudRunV1Condition.md) | Conditions communicates information about ongoing/complete reconciliation processes that bring the \&quot;spec\&quot; inline with the observed state of the world. | [optional] 
**observed_generation** | **int** | ObservedGeneration is the &#39;Generation&#39; of the Route that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration &#x3D; metadata.generation and the Ready condition&#39;s status is True or False. Note that providing a TrafficTarget that has latest_revision&#x3D;True will result in a Route that does not increment either its metadata.generation or its observedGeneration, as new \&quot;latest ready\&quot; revisions from the Configuration are processed without an update to the Route&#39;s spec. | [optional] 
**traffic** | [**List[TrafficTarget]**](TrafficTarget.md) | Traffic holds the configured traffic distribution. These entries will always contain RevisionName references. When ConfigurationName appears in the spec, this will hold the LatestReadyRevisionName that was last observed. | [optional] 
**url** | **str** | URL holds the url that will distribute traffic over the provided traffic targets. It generally has the form: &#x60;https://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app&#x60; | [optional] 

## Example

```python
from openapi_client.models.route_status import RouteStatus

# TODO update the JSON string below
json = "{}"
# create an instance of RouteStatus from a JSON string
route_status_instance = RouteStatus.from_json(json)
# print the JSON string representation of the object
print(RouteStatus.to_json())

# convert the object into a dict
route_status_dict = route_status_instance.to_dict()
# create an instance of RouteStatus from a dict
route_status_from_dict = RouteStatus.from_dict(route_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


