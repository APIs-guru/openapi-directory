# ListExecutionsResponse

Response for listing scheduled notebook executions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**executions** | [**List[Execution]**](Execution.md) | A list of returned instances. | [optional] 
**next_page_token** | **str** | Page token that can be used to continue listing from the last result in the next list call. | [optional] 
**unreachable** | **List[str]** | Executions IDs that could not be reached. For example: [&#39;projects/{project_id}/location/{location}/executions/imagenet_test1&#39;, &#39;projects/{project_id}/location/{location}/executions/classifier_train1&#39;] | [optional] 

## Example

```python
from openapi_client.models.list_executions_response import ListExecutionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListExecutionsResponse from a JSON string
list_executions_response_instance = ListExecutionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListExecutionsResponse.to_json())

# convert the object into a dict
list_executions_response_dict = list_executions_response_instance.to_dict()
# create an instance of ListExecutionsResponse from a dict
list_executions_response_from_dict = ListExecutionsResponse.from_dict(list_executions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


