# InventoryVersionedPackage

Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **str** | The system architecture this package is intended for. | [optional] 
**package_name** | **str** | The name of the package. | [optional] 
**version** | **str** | The version of the package. | [optional] 

## Example

```python
from openapi_client.models.inventory_versioned_package import InventoryVersionedPackage

# TODO update the JSON string below
json = "{}"
# create an instance of InventoryVersionedPackage from a JSON string
inventory_versioned_package_instance = InventoryVersionedPackage.from_json(json)
# print the JSON string representation of the object
print(InventoryVersionedPackage.to_json())

# convert the object into a dict
inventory_versioned_package_dict = inventory_versioned_package_instance.to_dict()
# create an instance of InventoryVersionedPackage from a dict
inventory_versioned_package_from_dict = InventoryVersionedPackage.from_dict(inventory_versioned_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


