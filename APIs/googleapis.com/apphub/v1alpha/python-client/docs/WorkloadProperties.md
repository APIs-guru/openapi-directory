# WorkloadProperties

Properties of an underlying compute resource represented by the Workload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcp_project** | **str** | Output only. The service project identifier that the underlying cloud resource resides in. Empty for non cloud resources. | [optional] [readonly] 
**location** | **str** | Output only. The location that the underlying compute resource resides in (e.g us-west1). | [optional] [readonly] 
**zone** | **str** | Output only. The location that the underlying compute resource resides in if it is zonal (e.g us-west1-a). | [optional] [readonly] 

## Example

```python
from openapi_client.models.workload_properties import WorkloadProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadProperties from a JSON string
workload_properties_instance = WorkloadProperties.from_json(json)
# print the JSON string representation of the object
print(WorkloadProperties.to_json())

# convert the object into a dict
workload_properties_dict = workload_properties_instance.to_dict()
# create an instance of WorkloadProperties from a dict
workload_properties_from_dict = WorkloadProperties.from_dict(workload_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


