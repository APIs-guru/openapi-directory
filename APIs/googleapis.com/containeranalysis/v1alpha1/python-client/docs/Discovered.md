# Discovered

Provides information about the scan status of a discovered resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_completed** | [**AnalysisCompleted**](AnalysisCompleted.md) |  | [optional] 
**analysis_error** | [**List[Status]**](Status.md) | Indicates any errors encountered during analysis of a resource. There could be 0 or more of these errors. | [optional] 
**analysis_status** | **str** | The status of discovery for the resource. | [optional] 
**analysis_status_error** | [**Status**](Status.md) |  | [optional] 
**archive_time** | **str** | The time occurrences related to this discovery occurrence were archived. | [optional] 
**continuous_analysis** | **str** | Whether the resource is continuously analyzed. | [optional] 
**cpe** | **str** | The CPE of the resource being scanned. | [optional] 
**last_scan_time** | **str** | The last time this resource was scanned. | [optional] 
**operation** | [**Operation**](Operation.md) |  | [optional] 
**sbom_status** | [**SBOMStatus**](SBOMStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.discovered import Discovered

# TODO update the JSON string below
json = "{}"
# create an instance of Discovered from a JSON string
discovered_instance = Discovered.from_json(json)
# print the JSON string representation of the object
print(Discovered.to_json())

# convert the object into a dict
discovered_dict = discovered_instance.to_dict()
# create an instance of Discovered from a dict
discovered_from_dict = Discovered.from_dict(discovered_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


