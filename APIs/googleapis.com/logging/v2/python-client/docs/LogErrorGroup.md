# LogErrorGroup

Contains metadata that associates the LogEntry to Error Reporting error groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id is a unique identifier for a particular error group; it is the last part of the error group resource name: /project/[PROJECT_ID]/errors/[ERROR_GROUP_ID]. Example: COShysOX0r_51QE. The id is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see Google Cloud Privacy Notice (https://cloud.google.com/terms/cloud-privacy-notice). | [optional] 

## Example

```python
from openapi_client.models.log_error_group import LogErrorGroup

# TODO update the JSON string below
json = "{}"
# create an instance of LogErrorGroup from a JSON string
log_error_group_instance = LogErrorGroup.from_json(json)
# print the JSON string representation of the object
print(LogErrorGroup.to_json())

# convert the object into a dict
log_error_group_dict = log_error_group_instance.to_dict()
# create an instance of LogErrorGroup from a dict
log_error_group_from_dict = LogErrorGroup.from_dict(log_error_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


