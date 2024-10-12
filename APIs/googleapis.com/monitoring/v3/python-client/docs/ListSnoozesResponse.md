# ListSnoozesResponse

The results of a successful ListSnoozes call, containing the matching Snoozes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Page token for repeated calls to ListSnoozes, to fetch additional pages of results. If this is empty or missing, there are no more pages. | [optional] 
**snoozes** | [**List[Snooze]**](Snooze.md) | Snoozes matching this list call. | [optional] 

## Example

```python
from openapi_client.models.list_snoozes_response import ListSnoozesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSnoozesResponse from a JSON string
list_snoozes_response_instance = ListSnoozesResponse.from_json(json)
# print the JSON string representation of the object
print(ListSnoozesResponse.to_json())

# convert the object into a dict
list_snoozes_response_dict = list_snoozes_response_instance.to_dict()
# create an instance of ListSnoozesResponse from a dict
list_snoozes_response_from_dict = ListSnoozesResponse.from_dict(list_snoozes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


