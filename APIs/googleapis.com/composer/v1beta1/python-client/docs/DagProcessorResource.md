# DagProcessorResource

Configuration for resources used by Airflow DAG processors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Optional. The number of DAG processors. If not provided or set to 0, a single DAG processor instance will be created. | [optional] 
**cpu** | **float** | Optional. CPU request and limit for a single Airflow DAG processor replica. | [optional] 
**memory_gb** | **float** | Optional. Memory (GB) request and limit for a single Airflow DAG processor replica. | [optional] 
**storage_gb** | **float** | Optional. Storage (GB) request and limit for a single Airflow DAG processor replica. | [optional] 

## Example

```python
from openapi_client.models.dag_processor_resource import DagProcessorResource

# TODO update the JSON string below
json = "{}"
# create an instance of DagProcessorResource from a JSON string
dag_processor_resource_instance = DagProcessorResource.from_json(json)
# print the JSON string representation of the object
print(DagProcessorResource.to_json())

# convert the object into a dict
dag_processor_resource_dict = dag_processor_resource_instance.to_dict()
# create an instance of DagProcessorResource from a dict
dag_processor_resource_from_dict = DagProcessorResource.from_dict(dag_processor_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


