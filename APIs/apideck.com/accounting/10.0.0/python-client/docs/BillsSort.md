# BillsSort


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**by** | **str** | The field on which to sort the Bills | [optional] 
**direction** | [**SortDirection**](SortDirection.md) |  | [optional] [default to SortDirection.ASC]

## Example

```python
from openapi_client.models.bills_sort import BillsSort

# TODO update the JSON string below
json = "{}"
# create an instance of BillsSort from a JSON string
bills_sort_instance = BillsSort.from_json(json)
# print the JSON string representation of the object
print(BillsSort.to_json())

# convert the object into a dict
bills_sort_dict = bills_sort_instance.to_dict()
# create an instance of BillsSort from a dict
bills_sort_from_dict = BillsSort.from_dict(bills_sort_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


