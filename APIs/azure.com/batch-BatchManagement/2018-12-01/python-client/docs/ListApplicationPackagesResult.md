# ListApplicationPackagesResult

The result of performing list application packages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[ApplicationPackage]**](ApplicationPackage.md) | The list of application packages. | [optional] 

## Example

```python
from openapi_client.models.list_application_packages_result import ListApplicationPackagesResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListApplicationPackagesResult from a JSON string
list_application_packages_result_instance = ListApplicationPackagesResult.from_json(json)
# print the JSON string representation of the object
print(ListApplicationPackagesResult.to_json())

# convert the object into a dict
list_application_packages_result_dict = list_application_packages_result_instance.to_dict()
# create an instance of ListApplicationPackagesResult from a dict
list_application_packages_result_from_dict = ListApplicationPackagesResult.from_dict(list_application_packages_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


