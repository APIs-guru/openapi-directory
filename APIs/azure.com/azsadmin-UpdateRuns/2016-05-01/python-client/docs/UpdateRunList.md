# UpdateRunList

Pageable list of update runs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[UpdateRun]**](UpdateRun.md) | List of update runs. | [optional] 

## Example

```python
from openapi_client.models.update_run_list import UpdateRunList

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateRunList from a JSON string
update_run_list_instance = UpdateRunList.from_json(json)
# print the JSON string representation of the object
print(UpdateRunList.to_json())

# convert the object into a dict
update_run_list_dict = update_run_list_instance.to_dict()
# create an instance of UpdateRunList from a dict
update_run_list_from_dict = UpdateRunList.from_dict(update_run_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


