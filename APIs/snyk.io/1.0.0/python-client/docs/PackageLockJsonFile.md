# PackageLockJsonFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **str** | The contents of the file, encoded according to the &#x60;encoding&#x60; field. | [optional] 

## Example

```python
from openapi_client.models.package_lock_json_file import PackageLockJsonFile

# TODO update the JSON string below
json = "{}"
# create an instance of PackageLockJsonFile from a JSON string
package_lock_json_file_instance = PackageLockJsonFile.from_json(json)
# print the JSON string representation of the object
print(PackageLockJsonFile.to_json())

# convert the object into a dict
package_lock_json_file_dict = package_lock_json_file_instance.to_dict()
# create an instance of PackageLockJsonFile from a dict
package_lock_json_file_from_dict = PackageLockJsonFile.from_dict(package_lock_json_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


