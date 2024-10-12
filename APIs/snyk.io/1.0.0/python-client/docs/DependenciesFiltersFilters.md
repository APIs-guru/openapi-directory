# DependenciesFiltersFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dep_status** | **str** | Status of the dependency. Requires reporting entitlement. Options: &#x60;deprecated&#x60; - Include only deprecated packages; &#x60;notDeprecated&#x60; - Include all packages that are not marked as deprecated; &#x60;any&#x60; - Include all packages (default) | [optional] 
**dependencies** | **List[object]** | The list of dependency IDs to filter the results by (i.e amdefine@1.0.1 or org.javassist:javassist@3.18.1-GA) | [optional] 
**languages** | **List[object]** | The type of languages to filter the results by | [optional] 
**licenses** | **List[object]** | The list of license IDs to filter the results by | [optional] 
**projects** | **List[object]** | The list of project IDs to filter the results by | [optional] 
**severity** | **List[object]** | The severities to filter the results by | [optional] 

## Example

```python
from openapi_client.models.dependencies_filters_filters import DependenciesFiltersFilters

# TODO update the JSON string below
json = "{}"
# create an instance of DependenciesFiltersFilters from a JSON string
dependencies_filters_filters_instance = DependenciesFiltersFilters.from_json(json)
# print the JSON string representation of the object
print(DependenciesFiltersFilters.to_json())

# convert the object into a dict
dependencies_filters_filters_dict = dependencies_filters_filters_instance.to_dict()
# create an instance of DependenciesFiltersFilters from a dict
dependencies_filters_filters_from_dict = DependenciesFiltersFilters.from_dict(dependencies_filters_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


