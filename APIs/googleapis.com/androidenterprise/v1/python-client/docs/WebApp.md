# WebApp

A WebApps resource represents a web app created for an enterprise. Web apps are published to managed Google Play and can be distributed like other Android apps. On a user's device, a web app opens its specified URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_mode** | **str** | The display mode of the web app. Possible values include: - \&quot;minimalUi\&quot;, the device&#39;s status bar, navigation bar, the app&#39;s URL, and a refresh button are visible when the app is open. For HTTP URLs, you can only select this option. - \&quot;standalone\&quot;, the device&#39;s status bar and navigation bar are visible when the app is open. - \&quot;fullScreen\&quot;, the app opens in full screen mode, hiding the device&#39;s status and navigation bars. All browser UI elements, page URL, system status bar and back button are not visible, and the web app takes up the entirety of the available display area.  | [optional] 
**icons** | [**List[WebAppIcon]**](WebAppIcon.md) | A list of icons representing this website. If absent, a default icon (for create) or the current icon (for update) will be used. | [optional] 
**is_published** | **bool** | A flag whether the app has been published to the Play store yet. | [optional] 
**start_url** | **str** | The start URL, i.e. the URL that should load when the user opens the application. | [optional] 
**title** | **str** | The title of the web app as displayed to the user (e.g., amongst a list of other applications, or as a label for an icon). | [optional] 
**version_code** | **str** | The current version of the app. Note that the version can automatically increase during the lifetime of the web app, while Google does internal housekeeping to keep the web app up-to-date. | [optional] 
**web_app_id** | **str** | The ID of the application. A string of the form \&quot;app:&lt;package name&gt;\&quot; where the package name always starts with the prefix \&quot;com.google.enterprise.webapp.\&quot; followed by a random id. | [optional] 

## Example

```python
from openapi_client.models.web_app import WebApp

# TODO update the JSON string below
json = "{}"
# create an instance of WebApp from a JSON string
web_app_instance = WebApp.from_json(json)
# print the JSON string representation of the object
print(WebApp.to_json())

# convert the object into a dict
web_app_dict = web_app_instance.to_dict()
# create an instance of WebApp from a dict
web_app_from_dict = WebApp.from_dict(web_app_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


