# ManagerList

List of StorSimple Managers under a particular resourceGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Manager]**](Manager.md) | List of Managers | 

## Example

```python
from openapi_client.models.manager_list import ManagerList

# TODO update the JSON string below
json = "{}"
# create an instance of ManagerList from a JSON string
manager_list_instance = ManagerList.from_json(json)
# print the JSON string representation of the object
print(ManagerList.to_json())

# convert the object into a dict
manager_list_dict = manager_list_instance.to_dict()
# create an instance of ManagerList from a dict
manager_list_from_dict = ManagerList.from_dict(manager_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


