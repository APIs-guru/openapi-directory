# Filters

May be used to filter budgets by resource group, resource, or meter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meters** | **List[str]** | The list of filters on meters (GUID), mandatory for budgets of usage category.  | [optional] 
**resource_groups** | **List[str]** | The list of filters on resource groups, allowed at subscription level only. | [optional] 
**resources** | **List[str]** | The list of filters on resources. | [optional] 
**tags** | **Dict[str, List[str]]** | The dictionary of filters on tags. | [optional] 

## Example

```python
from openapi_client.models.filters import Filters

# TODO update the JSON string below
json = "{}"
# create an instance of Filters from a JSON string
filters_instance = Filters.from_json(json)
# print the JSON string representation of the object
print(Filters.to_json())

# convert the object into a dict
filters_dict = filters_instance.to_dict()
# create an instance of Filters from a dict
filters_from_dict = Filters.from_dict(filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


