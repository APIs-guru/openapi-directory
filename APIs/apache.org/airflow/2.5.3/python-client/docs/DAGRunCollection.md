# DAGRunCollection

Collection of DAG runs.  *Changed in version 2.1.0*&#58; 'total_entries' field is added. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_entries** | **int** | Count of total objects in the current result set before pagination parameters (limit, offset) are applied.  | [optional] 
**dag_runs** | [**List[DAGRun]**](DAGRun.md) |  | [optional] 

## Example

```python
from openapi_client.models.dag_run_collection import DAGRunCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DAGRunCollection from a JSON string
dag_run_collection_instance = DAGRunCollection.from_json(json)
# print the JSON string representation of the object
print(DAGRunCollection.to_json())

# convert the object into a dict
dag_run_collection_dict = dag_run_collection_instance.to_dict()
# create an instance of DAGRunCollection from a dict
dag_run_collection_from_dict = DAGRunCollection.from_dict(dag_run_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


