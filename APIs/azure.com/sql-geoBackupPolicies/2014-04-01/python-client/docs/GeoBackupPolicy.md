# GeoBackupPolicy

A database geo backup policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Kind of geo backup policy.  This is metadata used for the Azure portal experience. | [optional] [readonly] 
**location** | **str** | Backup policy location. | [optional] [readonly] 
**properties** | [**GeoBackupPolicyProperties**](GeoBackupPolicyProperties.md) |  | 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.geo_backup_policy import GeoBackupPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GeoBackupPolicy from a JSON string
geo_backup_policy_instance = GeoBackupPolicy.from_json(json)
# print the JSON string representation of the object
print(GeoBackupPolicy.to_json())

# convert the object into a dict
geo_backup_policy_dict = geo_backup_policy_instance.to_dict()
# create an instance of GeoBackupPolicy from a dict
geo_backup_policy_from_dict = GeoBackupPolicy.from_dict(geo_backup_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


