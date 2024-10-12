# OpportunitiesSort


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**by** | **str** | The field on which to sort the Opportunities | [optional] 
**direction** | [**SortDirection**](SortDirection.md) |  | [optional] [default to SortDirection.ASC]

## Example

```python
from openapi_client.models.opportunities_sort import OpportunitiesSort

# TODO update the JSON string below
json = "{}"
# create an instance of OpportunitiesSort from a JSON string
opportunities_sort_instance = OpportunitiesSort.from_json(json)
# print the JSON string representation of the object
print(OpportunitiesSort.to_json())

# convert the object into a dict
opportunities_sort_dict = opportunities_sort_instance.to_dict()
# create an instance of OpportunitiesSort from a dict
opportunities_sort_from_dict = OpportunitiesSort.from_dict(opportunities_sort_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


