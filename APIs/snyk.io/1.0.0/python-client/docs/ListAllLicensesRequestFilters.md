# ListAllLicensesRequestFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dependencies** | **object** | The list of dependency IDs to filter the results by | [optional] 
**languages** | **List[object]** | The type of languages to filter the results by | [optional] 
**licenses** | **object** | The list of license IDs to filter the results by | [optional] 
**projects** | **object** | The list of project IDs to filter the results by | [optional] 
**severity** | **List[object]** | The severities to filter the results by | [optional] 

## Example

```python
from openapi_client.models.list_all_licenses_request_filters import ListAllLicensesRequestFilters

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllLicensesRequestFilters from a JSON string
list_all_licenses_request_filters_instance = ListAllLicensesRequestFilters.from_json(json)
# print the JSON string representation of the object
print(ListAllLicensesRequestFilters.to_json())

# convert the object into a dict
list_all_licenses_request_filters_dict = list_all_licenses_request_filters_instance.to_dict()
# create an instance of ListAllLicensesRequestFilters from a dict
list_all_licenses_request_filters_from_dict = ListAllLicensesRequestFilters.from_dict(list_all_licenses_request_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


