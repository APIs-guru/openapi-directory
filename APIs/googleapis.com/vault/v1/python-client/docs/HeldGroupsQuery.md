# HeldGroupsQuery

Query options for group holds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The end time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date. | [optional] 
**start_time** | **str** | The start time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date. | [optional] 
**terms** | **str** | The [search operators](https://support.google.com/vault/answer/2474474) used to refine the messages covered by the hold. | [optional] 

## Example

```python
from openapi_client.models.held_groups_query import HeldGroupsQuery

# TODO update the JSON string below
json = "{}"
# create an instance of HeldGroupsQuery from a JSON string
held_groups_query_instance = HeldGroupsQuery.from_json(json)
# print the JSON string representation of the object
print(HeldGroupsQuery.to_json())

# convert the object into a dict
held_groups_query_dict = held_groups_query_instance.to_dict()
# create an instance of HeldGroupsQuery from a dict
held_groups_query_from_dict = HeldGroupsQuery.from_dict(held_groups_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


