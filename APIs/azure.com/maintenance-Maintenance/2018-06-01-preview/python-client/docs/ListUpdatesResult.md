# ListUpdatesResult

Response for Updates list

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Update]**](Update.md) | The pending updates | [optional] 

## Example

```python
from openapi_client.models.list_updates_result import ListUpdatesResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListUpdatesResult from a JSON string
list_updates_result_instance = ListUpdatesResult.from_json(json)
# print the JSON string representation of the object
print(ListUpdatesResult.to_json())

# convert the object into a dict
list_updates_result_dict = list_updates_result_instance.to_dict()
# create an instance of ListUpdatesResult from a dict
list_updates_result_from_dict = ListUpdatesResult.from_dict(list_updates_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


