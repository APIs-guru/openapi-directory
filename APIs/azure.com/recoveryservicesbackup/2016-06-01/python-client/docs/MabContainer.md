# MabContainer

The container associated with items backed up using Azure Backup Server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_version** | **str** | The version of the agent used with this container. | [optional] 
**can_re_register** | **bool** | The container can be registered one more time. | [optional] 
**container_id** | **int** | The ID for the container. | [optional] 
**extended_info** | [**MabContainerExtendedInfo**](MabContainerExtendedInfo.md) |  | [optional] 
**protected_item_count** | **int** | The number of backup items in the container. | [optional] 

## Example

```python
from openapi_client.models.mab_container import MabContainer

# TODO update the JSON string below
json = "{}"
# create an instance of MabContainer from a JSON string
mab_container_instance = MabContainer.from_json(json)
# print the JSON string representation of the object
print(MabContainer.to_json())

# convert the object into a dict
mab_container_dict = mab_container_instance.to_dict()
# create an instance of MabContainer from a dict
mab_container_from_dict = MabContainer.from_dict(mab_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


