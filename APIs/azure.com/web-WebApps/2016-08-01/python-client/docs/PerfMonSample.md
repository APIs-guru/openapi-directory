# PerfMonSample

Performance monitor sample in a set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**core_count** | **int** | Core Count of worker. Not a data member | [optional] 
**instance_name** | **str** | Name of the server on which the measurement is made. | [optional] 
**time** | **datetime** | Point in time for which counter was measured. | [optional] 
**value** | **float** | Value of counter at a certain time. | [optional] 

## Example

```python
from openapi_client.models.perf_mon_sample import PerfMonSample

# TODO update the JSON string below
json = "{}"
# create an instance of PerfMonSample from a JSON string
perf_mon_sample_instance = PerfMonSample.from_json(json)
# print the JSON string representation of the object
print(PerfMonSample.to_json())

# convert the object into a dict
perf_mon_sample_dict = perf_mon_sample_instance.to_dict()
# create an instance of PerfMonSample from a dict
perf_mon_sample_from_dict = PerfMonSample.from_dict(perf_mon_sample_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


