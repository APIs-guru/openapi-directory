# MabContainerExtendedInfo

Additional information of the container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_item_type** | **str** | Type of backup items associated with this container. | [optional] 
**backup_items** | **List[str]** | List of backup items associated with this container. | [optional] 
**last_backup_status** | **str** | Latest backup status of this container. | [optional] 
**last_refreshed_at** | **datetime** | Time stamp when this container was refreshed. | [optional] 
**policy_name** | **str** | Backup policy associated with this container. | [optional] 

## Example

```python
from openapi_client.models.mab_container_extended_info import MabContainerExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of MabContainerExtendedInfo from a JSON string
mab_container_extended_info_instance = MabContainerExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(MabContainerExtendedInfo.to_json())

# convert the object into a dict
mab_container_extended_info_dict = mab_container_extended_info_instance.to_dict()
# create an instance of MabContainerExtendedInfo from a dict
mab_container_extended_info_from_dict = MabContainerExtendedInfo.from_dict(mab_container_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


