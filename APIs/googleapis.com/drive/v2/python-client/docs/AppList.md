# AppList

A list of third-party applications which the user has installed or given access to Google Drive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_app_ids** | **List[str]** | List of app IDs that the user has specified to use by default. The list is in reverse-priority order (lowest to highest). | [optional] 
**etag** | **str** | The ETag of the list. | [optional] 
**items** | [**List[App]**](App.md) | The list of apps. | [optional] 
**kind** | **str** | This is always &#x60;drive#appList&#x60;. | [optional] [default to 'drive#appList']
**self_link** | **str** | A link back to this list. | [optional] 

## Example

```python
from openapi_client.models.app_list import AppList

# TODO update the JSON string below
json = "{}"
# create an instance of AppList from a JSON string
app_list_instance = AppList.from_json(json)
# print the JSON string representation of the object
print(AppList.to_json())

# convert the object into a dict
app_list_dict = app_list_instance.to_dict()
# create an instance of AppList from a dict
app_list_from_dict = AppList.from_dict(app_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


