# LeadsSort


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**by** | **str** | The field on which to sort the Leads | [optional] 
**direction** | [**SortDirection**](SortDirection.md) |  | [optional] [default to SortDirection.ASC]

## Example

```python
from openapi_client.models.leads_sort import LeadsSort

# TODO update the JSON string below
json = "{}"
# create an instance of LeadsSort from a JSON string
leads_sort_instance = LeadsSort.from_json(json)
# print the JSON string representation of the object
print(LeadsSort.to_json())

# convert the object into a dict
leads_sort_dict = leads_sort_instance.to_dict()
# create an instance of LeadsSort from a dict
leads_sort_from_dict = LeadsSort.from_dict(leads_sort_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


