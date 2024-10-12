# ReachabilityDetails

Results of the configuration analysis from the last run of the test.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**Status**](Status.md) |  | [optional] 
**result** | **str** | The overall result of the test&#39;s configuration analysis. | [optional] 
**traces** | [**List[Trace]**](Trace.md) | Result may contain a list of traces if a test has multiple possible paths in the network, such as when destination endpoint is a load balancer with multiple backends. | [optional] 
**verify_time** | **str** | The time of the configuration analysis. | [optional] 

## Example

```python
from openapi_client.models.reachability_details import ReachabilityDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ReachabilityDetails from a JSON string
reachability_details_instance = ReachabilityDetails.from_json(json)
# print the JSON string representation of the object
print(ReachabilityDetails.to_json())

# convert the object into a dict
reachability_details_dict = reachability_details_instance.to_dict()
# create an instance of ReachabilityDetails from a dict
reachability_details_from_dict = ReachabilityDetails.from_dict(reachability_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


