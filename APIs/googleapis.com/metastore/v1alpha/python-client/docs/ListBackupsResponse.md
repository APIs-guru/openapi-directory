# ListBackupsResponse

Response message for DataprocMetastore.ListBackups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backups** | [**List[Backup]**](Backup.md) | The backups of the specified service. | [optional] 
**next_page_token** | **str** | A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_backups_response import ListBackupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBackupsResponse from a JSON string
list_backups_response_instance = ListBackupsResponse.from_json(json)
# print the JSON string representation of the object
print(ListBackupsResponse.to_json())

# convert the object into a dict
list_backups_response_dict = list_backups_response_instance.to_dict()
# create an instance of ListBackupsResponse from a dict
list_backups_response_from_dict = ListBackupsResponse.from_dict(list_backups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


