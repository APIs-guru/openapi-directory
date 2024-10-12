# CisBenchmark

A compliance check that is a CIS benchmark.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profile_level** | **int** |  | [optional] 
**severity** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cis_benchmark import CisBenchmark

# TODO update the JSON string below
json = "{}"
# create an instance of CisBenchmark from a JSON string
cis_benchmark_instance = CisBenchmark.from_json(json)
# print the JSON string representation of the object
print(CisBenchmark.to_json())

# convert the object into a dict
cis_benchmark_dict = cis_benchmark_instance.to_dict()
# create an instance of CisBenchmark from a dict
cis_benchmark_from_dict = CisBenchmark.from_dict(cis_benchmark_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


