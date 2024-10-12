# ListWorkstationsResponse

Response message for ListWorkstations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Optional. Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**unreachable** | **List[str]** | Optional. Unreachable resources. | [optional] 
**workstations** | [**List[Workstation]**](Workstation.md) | The requested workstations. | [optional] 

## Example

```python
from openapi_client.models.list_workstations_response import ListWorkstationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListWorkstationsResponse from a JSON string
list_workstations_response_instance = ListWorkstationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListWorkstationsResponse.to_json())

# convert the object into a dict
list_workstations_response_dict = list_workstations_response_instance.to_dict()
# create an instance of ListWorkstationsResponse from a dict
list_workstations_response_from_dict = ListWorkstationsResponse.from_dict(list_workstations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


