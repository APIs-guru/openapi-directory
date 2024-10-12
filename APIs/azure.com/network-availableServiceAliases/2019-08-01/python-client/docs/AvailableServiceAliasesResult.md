# AvailableServiceAliasesResult

An array of available service aliases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[AvailableServiceAlias]**](AvailableServiceAlias.md) | An array of available service aliases. | [optional] 

## Example

```python
from openapi_client.models.available_service_aliases_result import AvailableServiceAliasesResult

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableServiceAliasesResult from a JSON string
available_service_aliases_result_instance = AvailableServiceAliasesResult.from_json(json)
# print the JSON string representation of the object
print(AvailableServiceAliasesResult.to_json())

# convert the object into a dict
available_service_aliases_result_dict = available_service_aliases_result_instance.to_dict()
# create an instance of AvailableServiceAliasesResult from a dict
available_service_aliases_result_from_dict = AvailableServiceAliasesResult.from_dict(available_service_aliases_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


