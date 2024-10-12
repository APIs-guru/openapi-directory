# TicketsSort


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**by** | **str** | The field on which to sort the Tickets | [optional] 
**direction** | [**SortDirection**](SortDirection.md) |  | [optional] [default to SortDirection.ASC]

## Example

```python
from openapi_client.models.tickets_sort import TicketsSort

# TODO update the JSON string below
json = "{}"
# create an instance of TicketsSort from a JSON string
tickets_sort_instance = TicketsSort.from_json(json)
# print the JSON string representation of the object
print(TicketsSort.to_json())

# convert the object into a dict
tickets_sort_dict = tickets_sort_instance.to_dict()
# create an instance of TicketsSort from a dict
tickets_sort_from_dict = TicketsSort.from_dict(tickets_sort_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


