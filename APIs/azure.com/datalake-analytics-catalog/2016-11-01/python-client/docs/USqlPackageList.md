# USqlPackageList

A Data Lake Analytics catalog U-SQL package item list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[USqlPackage]**](USqlPackage.md) | the list of packages in the database and schema combination | [optional] [readonly] 
**next_link** | **str** | the link to the next page of results. | [optional] 

## Example

```python
from openapi_client.models.u_sql_package_list import USqlPackageList

# TODO update the JSON string below
json = "{}"
# create an instance of USqlPackageList from a JSON string
u_sql_package_list_instance = USqlPackageList.from_json(json)
# print the JSON string representation of the object
print(USqlPackageList.to_json())

# convert the object into a dict
u_sql_package_list_dict = u_sql_package_list_instance.to_dict()
# create an instance of USqlPackageList from a dict
u_sql_package_list_from_dict = USqlPackageList.from_dict(u_sql_package_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


