# DiscoveryOccurrence

Provides information about the analysis status of a discovered resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_completed** | [**AnalysisCompleted**](AnalysisCompleted.md) |  | [optional] 
**analysis_error** | [**List[Status]**](Status.md) | Indicates any errors encountered during analysis of a resource. There could be 0 or more of these errors. | [optional] 
**analysis_status** | **str** | The status of discovery for the resource. | [optional] 
**analysis_status_error** | [**Status**](Status.md) |  | [optional] 
**archive_time** | **str** | Output only. The time occurrences related to this discovery occurrence were archived. | [optional] [readonly] 
**continuous_analysis** | **str** | Whether the resource is continuously analyzed. | [optional] 
**cpe** | **str** | The CPE of the resource being scanned. | [optional] 
**last_scan_time** | **str** | The last time this resource was scanned. | [optional] 
**sbom_status** | [**SBOMStatus**](SBOMStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.discovery_occurrence import DiscoveryOccurrence

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveryOccurrence from a JSON string
discovery_occurrence_instance = DiscoveryOccurrence.from_json(json)
# print the JSON string representation of the object
print(DiscoveryOccurrence.to_json())

# convert the object into a dict
discovery_occurrence_dict = discovery_occurrence_instance.to_dict()
# create an instance of DiscoveryOccurrence from a dict
discovery_occurrence_from_dict = DiscoveryOccurrence.from_dict(discovery_occurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


