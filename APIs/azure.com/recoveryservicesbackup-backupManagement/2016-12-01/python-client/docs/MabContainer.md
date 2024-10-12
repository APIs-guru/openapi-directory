# MabContainer

Container with items backed up using MAB backup engine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_version** | **str** | Agent version of this container. | [optional] 
**can_re_register** | **bool** | Can the container be registered one more time. | [optional] 
**container_id** | **int** | ContainerID represents the container. | [optional] 
**extended_info** | [**MabContainerExtendedInfo**](MabContainerExtendedInfo.md) |  | [optional] 
**protected_item_count** | **int** | Number of items backed up in this container. | [optional] 

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


