# ListEnvironmentsResponse

Response message for EnvironmentService.ListEnvironments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environments** | [**List[Environment]**](Environment.md) | Environments. Always set. | [optional] 
**execution_id** | **str** | A Execution id Always set. | [optional] 
**history_id** | **str** | A History id. Always set. | [optional] 
**next_page_token** | **str** | A continuation token to resume the query at the next item. Will only be set if there are more Environments to fetch. | [optional] 
**project_id** | **str** | A Project id. Always set. | [optional] 

## Example

```python
from openapi_client.models.list_environments_response import ListEnvironmentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListEnvironmentsResponse from a JSON string
list_environments_response_instance = ListEnvironmentsResponse.from_json(json)
# print the JSON string representation of the object
print(ListEnvironmentsResponse.to_json())

# convert the object into a dict
list_environments_response_dict = list_environments_response_instance.to_dict()
# create an instance of ListEnvironmentsResponse from a dict
list_environments_response_from_dict = ListEnvironmentsResponse.from_dict(list_environments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


