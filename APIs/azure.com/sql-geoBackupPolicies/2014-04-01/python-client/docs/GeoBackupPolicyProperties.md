# GeoBackupPolicyProperties

The properties of the geo backup policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | The state of the geo backup policy. | 
**storage_type** | **str** | The storage type of the geo backup policy. | [optional] [readonly] 

## Example

```python
from openapi_client.models.geo_backup_policy_properties import GeoBackupPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GeoBackupPolicyProperties from a JSON string
geo_backup_policy_properties_instance = GeoBackupPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(GeoBackupPolicyProperties.to_json())

# convert the object into a dict
geo_backup_policy_properties_dict = geo_backup_policy_properties_instance.to_dict()
# create an instance of GeoBackupPolicyProperties from a dict
geo_backup_policy_properties_from_dict = GeoBackupPolicyProperties.from_dict(geo_backup_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


