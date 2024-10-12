# ManagerProperties

The properties of the StorSimple Manager.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cis_intrinsic_settings** | [**ManagerIntrinsicSettings**](ManagerIntrinsicSettings.md) |  | [optional] 
**provisioning_state** | **str** | Specifies the state of the resource as it is getting provisioned. Value of \&quot;Succeeded\&quot; means the Manager was successfully created. | [optional] 
**sku** | [**ManagerSku**](ManagerSku.md) |  | [optional] 

## Example

```python
from openapi_client.models.manager_properties import ManagerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagerProperties from a JSON string
manager_properties_instance = ManagerProperties.from_json(json)
# print the JSON string representation of the object
print(ManagerProperties.to_json())

# convert the object into a dict
manager_properties_dict = manager_properties_instance.to_dict()
# create an instance of ManagerProperties from a dict
manager_properties_from_dict = ManagerProperties.from_dict(manager_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


