# ViewListResult

The response of list view operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. | [optional] 
**value** | [**List[ViewResourceFormat]**](ViewResourceFormat.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.view_list_result import ViewListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ViewListResult from a JSON string
view_list_result_instance = ViewListResult.from_json(json)
# print the JSON string representation of the object
print(ViewListResult.to_json())

# convert the object into a dict
view_list_result_dict = view_list_result_instance.to_dict()
# create an instance of ViewListResult from a dict
view_list_result_from_dict = ViewListResult.from_dict(view_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


