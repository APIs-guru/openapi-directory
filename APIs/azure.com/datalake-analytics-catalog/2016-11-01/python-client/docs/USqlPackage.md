# USqlPackage

A Data Lake Analytics catalog U-SQL package item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_name** | **str** | the name of the database containing the package. | [optional] 
**definition** | **str** | the definition of the package. | [optional] 
**package_name** | **str** | the name of the package. | [optional] 
**schema_name** | **str** | the name of the schema associated with this package and database. | [optional] 
**compute_account_name** | **str** | the name of the Data Lake Analytics account. | [optional] 
**version** | **str** | the version of the catalog item. | [optional] 

## Example

```python
from openapi_client.models.u_sql_package import USqlPackage

# TODO update the JSON string below
json = "{}"
# create an instance of USqlPackage from a JSON string
u_sql_package_instance = USqlPackage.from_json(json)
# print the JSON string representation of the object
print(USqlPackage.to_json())

# convert the object into a dict
u_sql_package_dict = u_sql_package_instance.to_dict()
# create an instance of USqlPackage from a dict
u_sql_package_from_dict = USqlPackage.from_dict(u_sql_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


