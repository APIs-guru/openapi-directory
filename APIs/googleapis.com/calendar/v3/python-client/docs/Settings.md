# Settings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of the collection. | [optional] 
**items** | [**List[Setting]**](Setting.md) | List of user settings. | [optional] 
**kind** | **str** | Type of the collection (\&quot;calendar#settings\&quot;). | [optional] [default to 'calendar#settings']
**next_page_token** | **str** | Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided. | [optional] 
**next_sync_token** | **str** | Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided. | [optional] 

## Example

```python
from openapi_client.models.settings import Settings

# TODO update the JSON string below
json = "{}"
# create an instance of Settings from a JSON string
settings_instance = Settings.from_json(json)
# print the JSON string representation of the object
print(Settings.to_json())

# convert the object into a dict
settings_dict = settings_instance.to_dict()
# create an instance of Settings from a dict
settings_from_dict = Settings.from_dict(settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


