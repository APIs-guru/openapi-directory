# ProbingDetails

Results of active probing from the last run of the test.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abort_cause** | **str** | The reason probing was aborted. | [optional] 
**destination_egress_location** | [**EdgeLocation**](EdgeLocation.md) |  | [optional] 
**endpoint_info** | [**EndpointInfo**](EndpointInfo.md) |  | [optional] 
**error** | [**Status**](Status.md) |  | [optional] 
**probing_latency** | [**LatencyDistribution**](LatencyDistribution.md) |  | [optional] 
**result** | **str** | The overall result of active probing. | [optional] 
**sent_probe_count** | **int** | Number of probes sent. | [optional] 
**successful_probe_count** | **int** | Number of probes that reached the destination. | [optional] 
**verify_time** | **str** | The time that reachability was assessed through active probing. | [optional] 

## Example

```python
from openapi_client.models.probing_details import ProbingDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ProbingDetails from a JSON string
probing_details_instance = ProbingDetails.from_json(json)
# print the JSON string representation of the object
print(ProbingDetails.to_json())

# convert the object into a dict
probing_details_dict = probing_details_instance.to_dict()
# create an instance of ProbingDetails from a dict
probing_details_from_dict = ProbingDetails.from_dict(probing_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


