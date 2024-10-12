# ListExecutionsResponse

ListExecutionsResponse is a list of Executions resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | The API version for this call such as \&quot;run.googleapis.com/v1\&quot;. | [optional] 
**items** | [**List[Execution]**](Execution.md) | List of Executions. | [optional] 
**kind** | **str** | The kind of this resource, in this case \&quot;ExecutionsList\&quot;. | [optional] 
**metadata** | [**ListMeta**](ListMeta.md) |  | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

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


