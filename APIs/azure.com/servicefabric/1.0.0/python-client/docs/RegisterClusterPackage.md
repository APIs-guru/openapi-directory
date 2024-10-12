# RegisterClusterPackage

The package of the register cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_manifest_file_path** | **str** | The relative path of the cluster manifest file | [optional] 
**code_file_path** | **str** | The path of the code file | [optional] 

## Example

```python
from openapi_client.models.register_cluster_package import RegisterClusterPackage

# TODO update the JSON string below
json = "{}"
# create an instance of RegisterClusterPackage from a JSON string
register_cluster_package_instance = RegisterClusterPackage.from_json(json)
# print the JSON string representation of the object
print(RegisterClusterPackage.to_json())

# convert the object into a dict
register_cluster_package_dict = register_cluster_package_instance.to_dict()
# create an instance of RegisterClusterPackage from a dict
register_cluster_package_from_dict = RegisterClusterPackage.from_dict(register_cluster_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


