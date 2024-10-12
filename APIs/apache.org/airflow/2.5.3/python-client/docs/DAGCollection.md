# DAGCollection

Collection of DAGs.  *Changed in version 2.1.0*&#58; 'total_entries' field is added. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_entries** | **int** | Count of total objects in the current result set before pagination parameters (limit, offset) are applied.  | [optional] 
**dags** | [**List[DAG]**](DAG.md) |  | [optional] 

## Example

```python
from openapi_client.models.dag_collection import DAGCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DAGCollection from a JSON string
dag_collection_instance = DAGCollection.from_json(json)
# print the JSON string representation of the object
print(DAGCollection.to_json())

# convert the object into a dict
dag_collection_dict = dag_collection_instance.to_dict()
# create an instance of DAGCollection from a dict
dag_collection_from_dict = DAGCollection.from_dict(dag_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


