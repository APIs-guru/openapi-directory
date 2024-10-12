# LinkListResult

The response of list link operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. | [optional] 
**value** | [**List[LinkResourceFormat]**](LinkResourceFormat.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.link_list_result import LinkListResult

# TODO update the JSON string below
json = "{}"
# create an instance of LinkListResult from a JSON string
link_list_result_instance = LinkListResult.from_json(json)
# print the JSON string representation of the object
print(LinkListResult.to_json())

# convert the object into a dict
link_list_result_dict = link_list_result_instance.to_dict()
# create an instance of LinkListResult from a dict
link_list_result_from_dict = LinkListResult.from_dict(link_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


