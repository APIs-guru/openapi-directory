# ResourceUtilizationReport

Worker metrics exported from workers. This contains resource utilization metrics accumulated from a variety of sources. For more information, see go/df-resource-signals.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containers** | [**Dict[str, ResourceUtilizationReport]**](ResourceUtilizationReport.md) | Per container information. Key: container name. | [optional] 
**cpu_time** | [**List[CPUTime]**](CPUTime.md) | CPU utilization samples. | [optional] 
**memory_info** | [**List[MemInfo]**](MemInfo.md) | Memory utilization samples. | [optional] 

## Example

```python
from openapi_client.models.resource_utilization_report import ResourceUtilizationReport

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceUtilizationReport from a JSON string
resource_utilization_report_instance = ResourceUtilizationReport.from_json(json)
# print the JSON string representation of the object
print(ResourceUtilizationReport.to_json())

# convert the object into a dict
resource_utilization_report_dict = resource_utilization_report_instance.to_dict()
# create an instance of ResourceUtilizationReport from a dict
resource_utilization_report_from_dict = ResourceUtilizationReport.from_dict(resource_utilization_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


