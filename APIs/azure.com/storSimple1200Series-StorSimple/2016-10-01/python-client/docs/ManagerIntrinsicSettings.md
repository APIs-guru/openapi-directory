# ManagerIntrinsicSettings

Intrinsic settings which refers to the type of the StorSimple manager

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Refers to the type of the StorSimple Manager | 

## Example

```python
from openapi_client.models.manager_intrinsic_settings import ManagerIntrinsicSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ManagerIntrinsicSettings from a JSON string
manager_intrinsic_settings_instance = ManagerIntrinsicSettings.from_json(json)
# print the JSON string representation of the object
print(ManagerIntrinsicSettings.to_json())

# convert the object into a dict
manager_intrinsic_settings_dict = manager_intrinsic_settings_instance.to_dict()
# create an instance of ManagerIntrinsicSettings from a dict
manager_intrinsic_settings_from_dict = ManagerIntrinsicSettings.from_dict(manager_intrinsic_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


