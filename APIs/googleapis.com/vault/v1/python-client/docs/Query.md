# Query

The query definition used for search and export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_info** | [**AccountInfo**](AccountInfo.md) |  | [optional] 
**calendar_options** | [**CalendarOptions**](CalendarOptions.md) |  | [optional] 
**corpus** | **str** | The Google Workspace service to search. | [optional] 
**data_scope** | **str** | The data source to search. | [optional] 
**drive_options** | [**DriveOptions**](DriveOptions.md) |  | [optional] 
**end_time** | **str** | The end time for the search query. Specify in GMT. The value is rounded to 12 AM on the specified date. | [optional] 
**hangouts_chat_info** | [**HangoutsChatInfo**](HangoutsChatInfo.md) |  | [optional] 
**hangouts_chat_options** | [**HangoutsChatOptions**](HangoutsChatOptions.md) |  | [optional] 
**mail_options** | [**MailOptions**](MailOptions.md) |  | [optional] 
**method** | **str** | The entity to search. This field replaces **searchMethod** to support shared drives. When **searchMethod** is **TEAM_DRIVE**, the response of this field is **SHARED_DRIVE**. | [optional] 
**org_unit_info** | [**OrgUnitInfo**](OrgUnitInfo.md) |  | [optional] 
**search_method** | **str** | The search method to use. | [optional] 
**shared_drive_info** | [**SharedDriveInfo**](SharedDriveInfo.md) |  | [optional] 
**sites_url_info** | [**SitesUrlInfo**](SitesUrlInfo.md) |  | [optional] 
**start_time** | **str** | The start time for the search query. Specify in GMT. The value is rounded to 12 AM on the specified date. | [optional] 
**team_drive_info** | [**TeamDriveInfo**](TeamDriveInfo.md) |  | [optional] 
**terms** | **str** | Service-specific [search operators](https://support.google.com/vault/answer/2474474) to filter search results. | [optional] 
**time_zone** | **str** | The time zone name. It should be an IANA TZ name, such as \&quot;America/Los_Angeles\&quot;. For a list of time zone names, see [Time Zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For more information about how Vault uses time zones, see [the Vault help center](https://support.google.com/vault/answer/6092995#time). | [optional] 
**voice_options** | [**VoiceOptions**](VoiceOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.query import Query

# TODO update the JSON string below
json = "{}"
# create an instance of Query from a JSON string
query_instance = Query.from_json(json)
# print the JSON string representation of the object
print(Query.to_json())

# convert the object into a dict
query_dict = query_instance.to_dict()
# create an instance of Query from a dict
query_from_dict = Query.from_dict(query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


