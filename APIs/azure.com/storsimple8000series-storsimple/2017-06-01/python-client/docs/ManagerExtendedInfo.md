# ManagerExtendedInfo

The extended info of the manager.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | The etag of the resource. | [optional] 
**properties** | [**ManagerExtendedInfoProperties**](ManagerExtendedInfoProperties.md) |  | [optional] 
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**kind** | **str** | The Kind of the object. Currently only Series8000 is supported | [optional] 
**name** | **str** | The name of the object. | [optional] [readonly] 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.manager_extended_info import ManagerExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ManagerExtendedInfo from a JSON string
manager_extended_info_instance = ManagerExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(ManagerExtendedInfo.to_json())

# convert the object into a dict
manager_extended_info_dict = manager_extended_info_instance.to_dict()
# create an instance of ManagerExtendedInfo from a dict
manager_extended_info_from_dict = ManagerExtendedInfo.from_dict(manager_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


