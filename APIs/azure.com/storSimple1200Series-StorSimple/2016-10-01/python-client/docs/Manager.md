# Manager

The StorSimple Manager

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the Manager | [optional] 
**properties** | [**ManagerProperties**](ManagerProperties.md) |  | [optional] 
**id** | **str** | The Resource Id | [optional] [readonly] 
**location** | **str** | The Geo location of the Manager | 
**name** | **str** | The Resource Name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Tags attached to the Manager | [optional] 
**type** | **str** | The Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.manager import Manager

# TODO update the JSON string below
json = "{}"
# create an instance of Manager from a JSON string
manager_instance = Manager.from_json(json)
# print the JSON string representation of the object
print(Manager.to_json())

# convert the object into a dict
manager_dict = manager_instance.to_dict()
# create an instance of Manager from a dict
manager_from_dict = Manager.from_dict(manager_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


