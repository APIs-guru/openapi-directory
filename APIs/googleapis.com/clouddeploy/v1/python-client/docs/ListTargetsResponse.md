# ListTargetsResponse

The response object from `ListTargets`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**targets** | [**List[Target]**](Target.md) | The &#x60;Target&#x60; objects. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_targets_response import ListTargetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTargetsResponse from a JSON string
list_targets_response_instance = ListTargetsResponse.from_json(json)
# print the JSON string representation of the object
print(ListTargetsResponse.to_json())

# convert the object into a dict
list_targets_response_dict = list_targets_response_instance.to_dict()
# create an instance of ListTargetsResponse from a dict
list_targets_response_from_dict = ListTargetsResponse.from_dict(list_targets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


