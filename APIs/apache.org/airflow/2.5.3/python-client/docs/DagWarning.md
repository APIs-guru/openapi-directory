# DagWarning


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dag_id** | **str** | The dag_id. | [optional] [readonly] 
**message** | **str** | The message for the dag warning. | [optional] [readonly] 
**timestamp** | **str** | The time when this warning was logged. | [optional] [readonly] 
**warning_type** | **str** | The warning type for the dag warning. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dag_warning import DagWarning

# TODO update the JSON string below
json = "{}"
# create an instance of DagWarning from a JSON string
dag_warning_instance = DagWarning.from_json(json)
# print the JSON string representation of the object
print(DagWarning.to_json())

# convert the object into a dict
dag_warning_dict = dag_warning_instance.to_dict()
# create an instance of DagWarning from a dict
dag_warning_from_dict = DagWarning.from_dict(dag_warning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


