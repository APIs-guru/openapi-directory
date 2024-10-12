# ListRestoresResponse

Response message for ListRestores.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token which may be sent as page_token in a subsequent &#x60;ListRestores&#x60; call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return. | [optional] 
**restores** | [**List[Restore]**](Restore.md) | The list of Restores matching the given criteria. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_restores_response import ListRestoresResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRestoresResponse from a JSON string
list_restores_response_instance = ListRestoresResponse.from_json(json)
# print the JSON string representation of the object
print(ListRestoresResponse.to_json())

# convert the object into a dict
list_restores_response_dict = list_restores_response_instance.to_dict()
# create an instance of ListRestoresResponse from a dict
list_restores_response_from_dict = ListRestoresResponse.from_dict(list_restores_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


