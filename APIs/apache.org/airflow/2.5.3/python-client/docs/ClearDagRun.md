# ClearDagRun


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dry_run** | **bool** | If set, don&#39;t actually run this operation. The response will contain a list of task instances planned to be cleaned, but not modified in any way.  | [optional] [default to True]

## Example

```python
from openapi_client.models.clear_dag_run import ClearDagRun

# TODO update the JSON string below
json = "{}"
# create an instance of ClearDagRun from a JSON string
clear_dag_run_instance = ClearDagRun.from_json(json)
# print the JSON string representation of the object
print(ClearDagRun.to_json())

# convert the object into a dict
clear_dag_run_dict = clear_dag_run_instance.to_dict()
# create an instance of ClearDagRun from a dict
clear_dag_run_from_dict = ClearDagRun.from_dict(clear_dag_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


