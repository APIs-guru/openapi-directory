# SetDagRunNote


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**note** | **str** | Custom notes left by users for this Dag Run. | [optional] 

## Example

```python
from openapi_client.models.set_dag_run_note import SetDagRunNote

# TODO update the JSON string below
json = "{}"
# create an instance of SetDagRunNote from a JSON string
set_dag_run_note_instance = SetDagRunNote.from_json(json)
# print the JSON string representation of the object
print(SetDagRunNote.to_json())

# convert the object into a dict
set_dag_run_note_dict = set_dag_run_note_instance.to_dict()
# create an instance of SetDagRunNote from a dict
set_dag_run_note_from_dict = SetDagRunNote.from_dict(set_dag_run_note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


