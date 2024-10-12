# UpgradeDependency

UpgradeDependency represents a dependency when upgrading a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_version** | **str** | Current version of the dependency e.g. 1.15.0. | [optional] 
**membership** | **str** | Membership names are formatted as &#x60;projects//locations//memberships/&#x60;. | [optional] 
**resource_name** | **str** | Resource name of the dependency. | [optional] 
**target_version** | **str** | Target version of the dependency e.g. 1.16.1. This is the version the dependency needs to be upgraded to before a resource can be upgraded. | [optional] 

## Example

```python
from openapi_client.models.upgrade_dependency import UpgradeDependency

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeDependency from a JSON string
upgrade_dependency_instance = UpgradeDependency.from_json(json)
# print the JSON string representation of the object
print(UpgradeDependency.to_json())

# convert the object into a dict
upgrade_dependency_dict = upgrade_dependency_instance.to_dict()
# create an instance of UpgradeDependency from a dict
upgrade_dependency_from_dict = UpgradeDependency.from_dict(upgrade_dependency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


