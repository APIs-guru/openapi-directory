# UnregisterClusterPackage

The package of the unregister cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_version** | **str** | The version of the code | [optional] 
**config_version** | **str** | The version of the config | [optional] 

## Example

```python
from openapi_client.models.unregister_cluster_package import UnregisterClusterPackage

# TODO update the JSON string below
json = "{}"
# create an instance of UnregisterClusterPackage from a JSON string
unregister_cluster_package_instance = UnregisterClusterPackage.from_json(json)
# print the JSON string representation of the object
print(UnregisterClusterPackage.to_json())

# convert the object into a dict
unregister_cluster_package_dict = unregister_cluster_package_instance.to_dict()
# create an instance of UnregisterClusterPackage from a dict
unregister_cluster_package_from_dict = UnregisterClusterPackage.from_dict(unregister_cluster_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


