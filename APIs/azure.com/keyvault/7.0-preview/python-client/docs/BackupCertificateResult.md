# BackupCertificateResult

The backup certificate result, containing the backup blob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The backup blob containing the backed up certificate. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup_certificate_result import BackupCertificateResult

# TODO update the JSON string below
json = "{}"
# create an instance of BackupCertificateResult from a JSON string
backup_certificate_result_instance = BackupCertificateResult.from_json(json)
# print the JSON string representation of the object
print(BackupCertificateResult.to_json())

# convert the object into a dict
backup_certificate_result_dict = backup_certificate_result_instance.to_dict()
# create an instance of BackupCertificateResult from a dict
backup_certificate_result_from_dict = BackupCertificateResult.from_dict(backup_certificate_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


