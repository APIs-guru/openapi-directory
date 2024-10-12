# AMLResultSet

Wrapper object to contain a single set of AML check results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_results_list_media** | [**List[BackgroundCheckResultObjectContainer]**](BackgroundCheckResultObjectContainer.md) | Collection of check results for the entity being found in any adverse media  An array sorted by type, then reverse chronological order of some/all background checks done on this entity. Older checks may have been previously done by you or another institution, and if so, these will be listed and appropriately anonymised/obfuscated.  | [optional] 
**check_results_list_pep** | [**List[BackgroundCheckResultObjectContainer]**](BackgroundCheckResultObjectContainer.md) | Collection of check results for the entity being a Politically Exposed Person  An array sorted by type, then reverse chronological order of some/all background checks done on this entity. Older checks may have been previously done by you or another institution, and if so, these will be listed and appropriately anonymised/obfuscated.  | [optional] 
**check_results_list_sanctions** | [**List[BackgroundCheckResultObjectContainer]**](BackgroundCheckResultObjectContainer.md) | Collection of check results for the entity being on a sanctions list  An array sorted by type, then reverse chronological order of some/all background checks done on this entity. Older checks may have been previously done by you or another institution, and if so, these will be listed and appropriately anonymised/obfuscated.  | [optional] 
**check_results_list_watchlists** | [**List[BackgroundCheckResultObjectContainer]**](BackgroundCheckResultObjectContainer.md) | Collection of check results for the entity being on a watchlist  An array sorted by type, then reverse chronological order of some/all background checks done on this entity. Older checks may have been previously done by you or another institution, and if so, these will be listed and appropriately anonymised/obfuscated.  | [optional] 
**group_details** | [**BackgroundCheckResultObjectContainer**](BackgroundCheckResultObjectContainer.md) |  | [optional] 

## Example

```python
from openapi_client.models.aml_result_set import AMLResultSet

# TODO update the JSON string below
json = "{}"
# create an instance of AMLResultSet from a JSON string
aml_result_set_instance = AMLResultSet.from_json(json)
# print the JSON string representation of the object
print(AMLResultSet.to_json())

# convert the object into a dict
aml_result_set_dict = aml_result_set_instance.to_dict()
# create an instance of AMLResultSet from a dict
aml_result_set_from_dict = AMLResultSet.from_dict(aml_result_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


