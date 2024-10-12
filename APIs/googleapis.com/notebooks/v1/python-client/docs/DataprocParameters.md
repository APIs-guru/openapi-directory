# DataprocParameters

Parameters used in Dataproc JobType executions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster** | **str** | URI for cluster used to run Dataproc execution. Format: &#x60;projects/{PROJECT_ID}/regions/{REGION}/clusters/{CLUSTER_NAME}&#x60; | [optional] 

## Example

```python
from openapi_client.models.dataproc_parameters import DataprocParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DataprocParameters from a JSON string
dataproc_parameters_instance = DataprocParameters.from_json(json)
# print the JSON string representation of the object
print(DataprocParameters.to_json())

# convert the object into a dict
dataproc_parameters_dict = dataproc_parameters_instance.to_dict()
# create an instance of DataprocParameters from a dict
dataproc_parameters_from_dict = DataprocParameters.from_dict(dataproc_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


