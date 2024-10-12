# App

The apps resource provides a list of the apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details. Some resource methods (such as `apps.get`) require an `appId`. Use the `apps.list` method to retrieve the ID for an installed application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorized** | **bool** | Whether the app is authorized to access data on the user&#39;s Drive. | [optional] 
**create_in_folder_template** | **str** | The template url to create a new file with this app in a given folder. The template will contain {folderId} to be replaced by the folder to create the new file in. | [optional] 
**create_url** | **str** | The url to create a new file with this app. | [optional] 
**has_drive_wide_scope** | **bool** | Whether the app has drive-wide scope. An app with drive-wide scope can access all files in the user&#39;s drive. | [optional] 
**icons** | [**List[AppIconsInner]**](AppIconsInner.md) | The various icons for the app. | [optional] 
**id** | **str** | The ID of the app. | [optional] 
**installed** | **bool** | Whether the app is installed. | [optional] 
**kind** | **str** | This is always &#x60;drive#app&#x60;. | [optional] [default to 'drive#app']
**long_description** | **str** | A long description of the app. | [optional] 
**name** | **str** | The name of the app. | [optional] 
**object_type** | **str** | The type of object this app creates (e.g. Chart). If empty, the app name should be used instead. | [optional] 
**open_url_template** | **str** | The template url for opening files with this app. The template will contain &#x60;{ids}&#x60; and/or &#x60;{exportIds}&#x60; to be replaced by the actual file ids. See Open Files for the full documentation. | [optional] 
**primary_file_extensions** | **List[str]** | The list of primary file extensions. | [optional] 
**primary_mime_types** | **List[str]** | The list of primary mime types. | [optional] 
**product_id** | **str** | The ID of the product listing for this app. | [optional] 
**product_url** | **str** | A link to the product listing for this app. | [optional] 
**secondary_file_extensions** | **List[str]** | The list of secondary file extensions. | [optional] 
**secondary_mime_types** | **List[str]** | The list of secondary mime types. | [optional] 
**short_description** | **str** | A short description of the app. | [optional] 
**supports_create** | **bool** | Whether this app supports creating new objects. | [optional] 
**supports_import** | **bool** | Whether this app supports importing from Docs Editors. | [optional] 
**supports_multi_open** | **bool** | Whether this app supports opening more than one file. | [optional] 
**supports_offline_create** | **bool** | Whether this app supports creating new files when offline. | [optional] 
**use_by_default** | **bool** | Whether the app is selected as the default handler for the types it supports. | [optional] 

## Example

```python
from openapi_client.models.app import App

# TODO update the JSON string below
json = "{}"
# create an instance of App from a JSON string
app_instance = App.from_json(json)
# print the JSON string representation of the object
print(App.to_json())

# convert the object into a dict
app_dict = app_instance.to_dict()
# create an instance of App from a dict
app_from_dict = App.from_dict(app_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


