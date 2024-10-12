# FailoverSetsList

The list of failover sets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[FailoverSet]**](FailoverSet.md) | The list of failover sets. | [optional] 

## Example

```python
from openapi_client.models.failover_sets_list import FailoverSetsList

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverSetsList from a JSON string
failover_sets_list_instance = FailoverSetsList.from_json(json)
# print the JSON string representation of the object
print(FailoverSetsList.to_json())

# convert the object into a dict
failover_sets_list_dict = failover_sets_list_instance.to_dict()
# create an instance of FailoverSetsList from a dict
failover_sets_list_from_dict = FailoverSetsList.from_dict(failover_sets_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


