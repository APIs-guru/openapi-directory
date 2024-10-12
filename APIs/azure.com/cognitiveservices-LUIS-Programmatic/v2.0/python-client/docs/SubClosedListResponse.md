# SubClosedListResponse

Sublist of items for a Closed list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The sublist ID | [optional] 
**canonical_form** | **str** | The standard form that the list represents. | [optional] 
**list** | **List[str]** | List of synonym words. | [optional] 

## Example

```python
from openapi_client.models.sub_closed_list_response import SubClosedListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubClosedListResponse from a JSON string
sub_closed_list_response_instance = SubClosedListResponse.from_json(json)
# print the JSON string representation of the object
print(SubClosedListResponse.to_json())

# convert the object into a dict
sub_closed_list_response_dict = sub_closed_list_response_instance.to_dict()
# create an instance of SubClosedListResponse from a dict
sub_closed_list_response_from_dict = SubClosedListResponse.from_dict(sub_closed_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


