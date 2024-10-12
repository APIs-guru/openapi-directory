# ContinuousBackupSource

Message describing a ContinuousBackupSource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster** | **str** | Required. The source cluster from which to restore. This cluster must have continuous backup enabled for this operation to succeed. For the required format, see the comment on the Cluster.name field. | [optional] 
**point_in_time** | **str** | Required. The point in time to restore to. | [optional] 

## Example

```python
from openapi_client.models.continuous_backup_source import ContinuousBackupSource

# TODO update the JSON string below
json = "{}"
# create an instance of ContinuousBackupSource from a JSON string
continuous_backup_source_instance = ContinuousBackupSource.from_json(json)
# print the JSON string representation of the object
print(ContinuousBackupSource.to_json())

# convert the object into a dict
continuous_backup_source_dict = continuous_backup_source_instance.to_dict()
# create an instance of ContinuousBackupSource from a dict
continuous_backup_source_from_dict = ContinuousBackupSource.from_dict(continuous_backup_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


