# ListBackupOperationsResponse

The response for ListBackupOperations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | &#x60;next_page_token&#x60; can be sent in a subsequent ListBackupOperations call to fetch more of the matching metadata. | [optional] 
**operations** | [**List[Operation]**](Operation.md) | The list of matching backup long-running operations. Each operation&#39;s name will be prefixed by the backup&#39;s name. The operation&#39;s metadata field type &#x60;metadata.type_url&#x60; describes the type of the metadata. Operations returned include those that are pending or have completed/failed/canceled within the last 7 days. Operations returned are ordered by &#x60;operation.metadata.value.progress.start_time&#x60; in descending order starting from the most recently started operation. | [optional] 

## Example

```python
from openapi_client.models.list_backup_operations_response import ListBackupOperationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBackupOperationsResponse from a JSON string
list_backup_operations_response_instance = ListBackupOperationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListBackupOperationsResponse.to_json())

# convert the object into a dict
list_backup_operations_response_dict = list_backup_operations_response_instance.to_dict()
# create an instance of ListBackupOperationsResponse from a dict
list_backup_operations_response_from_dict = ListBackupOperationsResponse.from_dict(list_backup_operations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


