# Share

A Filestore share.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup** | **str** | Immutable. Full name of the Cloud Filestore Backup resource that this Share is restored from, in the format of projects/{project_id}/locations/{location_id}/backups/{backup_id}. Empty, if the Share is created from scratch and not restored from a backup. | [optional] 
**capacity_gb** | **str** | File share capacity in gigabytes (GB). Filestore defines 1 GB as 1024^3 bytes. Must be greater than 0. | [optional] 
**create_time** | **str** | Output only. The time when the share was created. | [optional] [readonly] 
**description** | **str** | A description of the share with 2048 characters or less. Requests with longer descriptions will be rejected. | [optional] 
**labels** | **Dict[str, str]** | Resource labels to represent user provided metadata. | [optional] 
**mount_name** | **str** | The mount name of the share. Must be 63 characters or less and consist of uppercase or lowercase letters, numbers, and underscores. | [optional] 
**name** | **str** | Output only. The resource name of the share, in the format &#x60;projects/{project_id}/locations/{location_id}/instances/{instance_id}/shares/{share_id}&#x60;. | [optional] [readonly] 
**nfs_export_options** | [**List[NfsExportOptions]**](NfsExportOptions.md) | Nfs Export Options. There is a limit of 10 export options per file share. | [optional] 
**state** | **str** | Output only. The share state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.share import Share

# TODO update the JSON string below
json = "{}"
# create an instance of Share from a JSON string
share_instance = Share.from_json(json)
# print the JSON string representation of the object
print(Share.to_json())

# convert the object into a dict
share_dict = share_instance.to_dict()
# create an instance of Share from a dict
share_from_dict = Share.from_dict(share_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


