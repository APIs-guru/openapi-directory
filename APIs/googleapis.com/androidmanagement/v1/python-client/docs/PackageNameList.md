# PackageNameList

A list of package names.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_names** | **List[str]** | A list of package names. | [optional] 

## Example

```python
from openapi_client.models.package_name_list import PackageNameList

# TODO update the JSON string below
json = "{}"
# create an instance of PackageNameList from a JSON string
package_name_list_instance = PackageNameList.from_json(json)
# print the JSON string representation of the object
print(PackageNameList.to_json())

# convert the object into a dict
package_name_list_dict = package_name_list_instance.to_dict()
# create an instance of PackageNameList from a dict
package_name_list_from_dict = PackageNameList.from_dict(package_name_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


