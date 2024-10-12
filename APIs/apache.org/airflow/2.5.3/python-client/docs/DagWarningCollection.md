# DagWarningCollection

Collection of DAG warnings. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_entries** | **int** | Count of total objects in the current result set before pagination parameters (limit, offset) are applied.  | [optional] 
**import_errors** | [**List[DagWarning]**](DagWarning.md) |  | [optional] 

## Example

```python
from openapi_client.models.dag_warning_collection import DagWarningCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DagWarningCollection from a JSON string
dag_warning_collection_instance = DagWarningCollection.from_json(json)
# print the JSON string representation of the object
print(DagWarningCollection.to_json())

# convert the object into a dict
dag_warning_collection_dict = dag_warning_collection_instance.to_dict()
# create an instance of DagWarningCollection from a dict
dag_warning_collection_from_dict = DagWarningCollection.from_dict(dag_warning_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


