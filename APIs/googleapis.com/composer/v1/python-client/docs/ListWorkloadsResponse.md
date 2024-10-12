# ListWorkloadsResponse

Response to ListWorkloadsRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The page token used to query for the next page if one exists. | [optional] 
**workloads** | [**List[ComposerWorkload]**](ComposerWorkload.md) | The list of environment workloads. | [optional] 

## Example

```python
from openapi_client.models.list_workloads_response import ListWorkloadsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListWorkloadsResponse from a JSON string
list_workloads_response_instance = ListWorkloadsResponse.from_json(json)
# print the JSON string representation of the object
print(ListWorkloadsResponse.to_json())

# convert the object into a dict
list_workloads_response_dict = list_workloads_response_instance.to_dict()
# create an instance of ListWorkloadsResponse from a dict
list_workloads_response_from_dict = ListWorkloadsResponse.from_dict(list_workloads_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


