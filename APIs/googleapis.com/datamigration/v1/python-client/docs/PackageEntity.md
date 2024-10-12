# PackageEntity

Package's parent is a schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_features** | **Dict[str, object]** | Custom engine specific features. | [optional] 
**package_body** | **str** | The SQL code which creates the package body. If the package specification has cursors or subprograms, then the package body is mandatory. | [optional] 
**package_sql_code** | **str** | The SQL code which creates the package. | [optional] 

## Example

```python
from openapi_client.models.package_entity import PackageEntity

# TODO update the JSON string below
json = "{}"
# create an instance of PackageEntity from a JSON string
package_entity_instance = PackageEntity.from_json(json)
# print the JSON string representation of the object
print(PackageEntity.to_json())

# convert the object into a dict
package_entity_dict = package_entity_instance.to_dict()
# create an instance of PackageEntity from a dict
package_entity_from_dict = PackageEntity.from_dict(package_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


