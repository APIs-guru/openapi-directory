# AzureFileShareRecoveryPoint

Azure File Share workload specific backup copy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_share_snapshot_uri** | **str** | Contains Url to the snapshot of fileshare, if applicable | [optional] [readonly] 
**recovery_point_size_in_gb** | **int** | Contains recovery point size | [optional] [readonly] 
**recovery_point_time** | **datetime** | Time at which this backup copy was created. | [optional] [readonly] 
**recovery_point_type** | **str** | Type of the backup copy. Specifies whether it is a crash consistent backup or app consistent. | [optional] [readonly] 

## Example

```python
from openapi_client.models.azure_file_share_recovery_point import AzureFileShareRecoveryPoint

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFileShareRecoveryPoint from a JSON string
azure_file_share_recovery_point_instance = AzureFileShareRecoveryPoint.from_json(json)
# print the JSON string representation of the object
print(AzureFileShareRecoveryPoint.to_json())

# convert the object into a dict
azure_file_share_recovery_point_dict = azure_file_share_recovery_point_instance.to_dict()
# create an instance of AzureFileShareRecoveryPoint from a dict
azure_file_share_recovery_point_from_dict = AzureFileShareRecoveryPoint.from_dict(azure_file_share_recovery_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


