# LoggingConfig

Specifies the logging behavior for transfer operations. For cloud-to-cloud transfers, logs are sent to Cloud Logging. See [Read transfer logs](https://cloud.google.com/storage-transfer/docs/read-transfer-logs) for details. For transfers to or from a POSIX file system, logs are stored in the Cloud Storage bucket that is the source or sink of the transfer. See [Managing Transfer for on-premises jobs] (https://cloud.google.com/storage-transfer/docs/managing-on-prem-jobs#viewing-logs) for details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_onprem_gcs_transfer_logs** | **bool** | For transfers with a PosixFilesystem source, this option enables the Cloud Storage transfer logs for this transfer. | [optional] 
**log_action_states** | **List[str]** | States in which &#x60;log_actions&#x60; are logged. If empty, no logs are generated. Not supported for transfers with PosixFilesystem data sources; use enable_onprem_gcs_transfer_logs instead. | [optional] 
**log_actions** | **List[str]** | Specifies the actions to be logged. If empty, no logs are generated. Not supported for transfers with PosixFilesystem data sources; use enable_onprem_gcs_transfer_logs instead. | [optional] 

## Example

```python
from openapi_client.models.logging_config import LoggingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of LoggingConfig from a JSON string
logging_config_instance = LoggingConfig.from_json(json)
# print the JSON string representation of the object
print(LoggingConfig.to_json())

# convert the object into a dict
logging_config_dict = logging_config_instance.to_dict()
# create an instance of LoggingConfig from a dict
logging_config_from_dict = LoggingConfig.from_dict(logging_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


