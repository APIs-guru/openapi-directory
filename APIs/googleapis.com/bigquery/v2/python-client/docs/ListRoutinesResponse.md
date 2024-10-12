# ListRoutinesResponse

Describes the format of a single result page when listing routines.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to request the next page of results. | [optional] 
**routines** | [**List[Routine]**](Routine.md) | Routines in the requested dataset. Unless read_mask is set in the request, only the following fields are populated: etag, project_id, dataset_id, routine_id, routine_type, creation_time, last_modified_time, language, and remote_function_options. | [optional] 

## Example

```python
from openapi_client.models.list_routines_response import ListRoutinesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRoutinesResponse from a JSON string
list_routines_response_instance = ListRoutinesResponse.from_json(json)
# print the JSON string representation of the object
print(ListRoutinesResponse.to_json())

# convert the object into a dict
list_routines_response_dict = list_routines_response_instance.to_dict()
# create an instance of ListRoutinesResponse from a dict
list_routines_response_from_dict = ListRoutinesResponse.from_dict(list_routines_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


