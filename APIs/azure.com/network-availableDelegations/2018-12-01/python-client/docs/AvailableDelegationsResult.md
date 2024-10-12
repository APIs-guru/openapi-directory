# AvailableDelegationsResult

An array of available delegations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[AvailableDelegation]**](AvailableDelegation.md) | An array of available delegations. | [optional] 

## Example

```python
from openapi_client.models.available_delegations_result import AvailableDelegationsResult

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableDelegationsResult from a JSON string
available_delegations_result_instance = AvailableDelegationsResult.from_json(json)
# print the JSON string representation of the object
print(AvailableDelegationsResult.to_json())

# convert the object into a dict
available_delegations_result_dict = available_delegations_result_instance.to_dict()
# create an instance of AvailableDelegationsResult from a dict
available_delegations_result_from_dict = AvailableDelegationsResult.from_dict(available_delegations_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


