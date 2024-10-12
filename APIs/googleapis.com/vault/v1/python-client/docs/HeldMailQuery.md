# HeldMailQuery

Query options for Gmail holds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The end time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date. | [optional] 
**start_time** | **str** | The start time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date. | [optional] 
**terms** | **str** | The [search operators](https://support.google.com/vault/answer/2474474) used to refine the messages covered by the hold. | [optional] 

## Example

```python
from openapi_client.models.held_mail_query import HeldMailQuery

# TODO update the JSON string below
json = "{}"
# create an instance of HeldMailQuery from a JSON string
held_mail_query_instance = HeldMailQuery.from_json(json)
# print the JSON string representation of the object
print(HeldMailQuery.to_json())

# convert the object into a dict
held_mail_query_dict = held_mail_query_instance.to_dict()
# create an instance of HeldMailQuery from a dict
held_mail_query_from_dict = HeldMailQuery.from_dict(held_mail_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


