# GeoBackupPolicyListResult

The response to a list geo backup policies request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[GeoBackupPolicy]**](GeoBackupPolicy.md) | The list of geo backup policies. | [optional] 

## Example

```python
from openapi_client.models.geo_backup_policy_list_result import GeoBackupPolicyListResult

# TODO update the JSON string below
json = "{}"
# create an instance of GeoBackupPolicyListResult from a JSON string
geo_backup_policy_list_result_instance = GeoBackupPolicyListResult.from_json(json)
# print the JSON string representation of the object
print(GeoBackupPolicyListResult.to_json())

# convert the object into a dict
geo_backup_policy_list_result_dict = geo_backup_policy_list_result_instance.to_dict()
# create an instance of GeoBackupPolicyListResult from a dict
geo_backup_policy_list_result_from_dict = GeoBackupPolicyListResult.from_dict(geo_backup_policy_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


