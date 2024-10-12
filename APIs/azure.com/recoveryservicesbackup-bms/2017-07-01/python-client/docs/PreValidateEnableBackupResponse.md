# PreValidateEnableBackupResponse

Response contract for enable backup validation request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_name** | **str** | Specifies the product specific container name. E.g. iaasvmcontainer;iaasvmcontainer;rgname;vmname. This is required  for portal | [optional] 
**error_code** | **str** | Response error code | [optional] 
**error_message** | **str** | Response error message | [optional] 
**protected_item_name** | **str** | Specifies the product specific ds name. E.g. vm;iaasvmcontainer;rgname;vmname. This is required for portal | [optional] 
**recommendation** | **str** | Recommended action for user | [optional] 
**status** | **str** | Validation Status | [optional] 

## Example

```python
from openapi_client.models.pre_validate_enable_backup_response import PreValidateEnableBackupResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PreValidateEnableBackupResponse from a JSON string
pre_validate_enable_backup_response_instance = PreValidateEnableBackupResponse.from_json(json)
# print the JSON string representation of the object
print(PreValidateEnableBackupResponse.to_json())

# convert the object into a dict
pre_validate_enable_backup_response_dict = pre_validate_enable_backup_response_instance.to_dict()
# create an instance of PreValidateEnableBackupResponse from a dict
pre_validate_enable_backup_response_from_dict = PreValidateEnableBackupResponse.from_dict(pre_validate_enable_backup_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


