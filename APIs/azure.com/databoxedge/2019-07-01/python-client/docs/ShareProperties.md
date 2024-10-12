# ShareProperties

The share properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_protocol** | **str** | Access protocol to be used by the share. | 
**azure_container_info** | [**AzureContainerInfo**](AzureContainerInfo.md) |  | [optional] 
**client_access_rights** | [**List[ClientAccessRight]**](ClientAccessRight.md) | List of IP addresses and corresponding access rights on the share(required for NFS protocol). | [optional] 
**data_policy** | **str** | Data policy of the share. | [optional] 
**description** | **str** | Description for the share. | [optional] 
**monitoring_status** | **str** | Current monitoring status of the share. | 
**refresh_details** | [**RefreshDetails**](RefreshDetails.md) |  | [optional] 
**share_mappings** | [**List[MountPointMap]**](MountPointMap.md) | Share mount point to the role. | [optional] [readonly] 
**share_status** | **str** | Current status of the share. | 
**user_access_rights** | [**List[UserAccessRight]**](UserAccessRight.md) | Mapping of users and corresponding access rights on the share (required for SMB protocol). | [optional] 

## Example

```python
from openapi_client.models.share_properties import ShareProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ShareProperties from a JSON string
share_properties_instance = ShareProperties.from_json(json)
# print the JSON string representation of the object
print(ShareProperties.to_json())

# convert the object into a dict
share_properties_dict = share_properties_instance.to_dict()
# create an instance of ShareProperties from a dict
share_properties_from_dict = ShareProperties.from_dict(share_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


