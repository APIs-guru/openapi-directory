# ListBackupsResponse

The response for ListBackups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backups** | [**List[Backup]**](Backup.md) | The list of matching backups. Backups returned are ordered by &#x60;create_time&#x60; in descending order, starting from the most recent &#x60;create_time&#x60;. | [optional] 
**next_page_token** | **str** | &#x60;next_page_token&#x60; can be sent in a subsequent ListBackups call to fetch more of the matching backups. | [optional] 

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


