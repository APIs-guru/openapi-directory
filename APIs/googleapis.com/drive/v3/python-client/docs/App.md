# App

The `apps` resource provides a list of apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details. Some resource methods (such as `apps.get`) require an `appId`. Use the `apps.list` method to retrieve the ID for an installed application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorized** | **bool** | Whether the app is authorized to access data on the user&#39;s Drive. | [optional] 
**create_in_folder_template** | **str** | The template URL to create a file with this app in a given folder. The template contains the {folderId} to be replaced by the folder ID house the new file. | [optional] 
**create_url** | **str** | The URL to create a file with this app. | [optional] 
**has_drive_wide_scope** | **bool** | Whether the app has Drive-wide scope. An app with Drive-wide scope can access all files in the user&#39;s Drive. | [optional] 
**icons** | [**List[AppIcons]**](AppIcons.md) | The various icons for the app. | [optional] 
**id** | **str** | The ID of the app. | [optional] 
**installed** | **bool** | Whether the app is installed. | [optional] 
**kind** | **str** | Output only. Identifies what kind of resource this is. Value: the fixed string \&quot;drive#app\&quot;. | [optional] [default to 'drive#app']
**long_description** | **str** | A long description of the app. | [optional] 
**name** | **str** | The name of the app. | [optional] 
**object_type** | **str** | The type of object this app creates such as a Chart. If empty, the app name should be used instead. | [optional] 
**open_url_template** | **str** | The template URL for opening files with this app. The template contains {ids} or {exportIds} to be replaced by the actual file IDs. For more information, see Open Files for the full documentation. | [optional] 
**primary_file_extensions** | **List[str]** | The list of primary file extensions. | [optional] 
**primary_mime_types** | **List[str]** | The list of primary MIME types. | [optional] 
**product_id** | **str** | The ID of the product listing for this app. | [optional] 
**product_url** | **str** | A link to the product listing for this app. | [optional] 
**secondary_file_extensions** | **List[str]** | The list of secondary file extensions. | [optional] 
**secondary_mime_types** | **List[str]** | The list of secondary MIME types. | [optional] 
**short_description** | **str** | A short description of the app. | [optional] 
**supports_create** | **bool** | Whether this app supports creating objects. | [optional] 
**supports_import** | **bool** | Whether this app supports importing from Google Docs. | [optional] 
**supports_multi_open** | **bool** | Whether this app supports opening more than one file. | [optional] 
**supports_offline_create** | **bool** | Whether this app supports creating files when offline. | [optional] 
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


