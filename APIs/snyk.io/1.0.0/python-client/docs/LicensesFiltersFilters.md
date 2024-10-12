# LicensesFiltersFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dependencies** | **List[object]** | The list of dependency IDs to filter the results by | [optional] 
**languages** | **List[object]** | The type of languages to filter the results by | [optional] 
**licenses** | **List[object]** | The list of license IDs to filter the results by | [optional] 
**projects** | **List[object]** | The list of project IDs to filter the results by | [optional] 
**severity** | **List[object]** | The severities to filter the results by | [optional] 

## Example

```python
from openapi_client.models.licenses_filters_filters import LicensesFiltersFilters

# TODO update the JSON string below
json = "{}"
# create an instance of LicensesFiltersFilters from a JSON string
licenses_filters_filters_instance = LicensesFiltersFilters.from_json(json)
# print the JSON string representation of the object
print(LicensesFiltersFilters.to_json())

# convert the object into a dict
licenses_filters_filters_dict = licenses_filters_filters_instance.to_dict()
# create an instance of LicensesFiltersFilters from a dict
licenses_filters_filters_from_dict = LicensesFiltersFilters.from_dict(licenses_filters_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


