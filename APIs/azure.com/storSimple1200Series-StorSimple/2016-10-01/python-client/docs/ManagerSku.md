# ManagerSku

The Sku.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Refers to the sku name which should be \&quot;Standard\&quot; | 

## Example

```python
from openapi_client.models.manager_sku import ManagerSku

# TODO update the JSON string below
json = "{}"
# create an instance of ManagerSku from a JSON string
manager_sku_instance = ManagerSku.from_json(json)
# print the JSON string representation of the object
print(ManagerSku.to_json())

# convert the object into a dict
manager_sku_dict = manager_sku_instance.to_dict()
# create an instance of ManagerSku from a dict
manager_sku_from_dict = ManagerSku.from_dict(manager_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


