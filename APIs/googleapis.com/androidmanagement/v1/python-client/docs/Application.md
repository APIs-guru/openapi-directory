# Application

Information about an app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_pricing** | **str** | Whether this app is free, free with in-app purchases, or paid. If the pricing is unspecified, this means the app is not generally available anymore (even though it might still be available to people who own it). | [optional] 
**app_tracks** | [**List[AppTrackInfo]**](AppTrackInfo.md) | Application tracks visible to the enterprise. | [optional] 
**app_versions** | [**List[AppVersion]**](AppVersion.md) | Versions currently available for this app. | [optional] 
**author** | **str** | The name of the author of the apps (for example, the app developer). | [optional] 
**available_countries** | **List[str]** | The countries which this app is available in as per ISO 3166-1 alpha-2. | [optional] 
**category** | **str** | The app category (e.g. RACING, SOCIAL, etc.) | [optional] 
**content_rating** | **str** | The content rating for this app. | [optional] 
**description** | **str** | The localized promotional description, if available. | [optional] 
**distribution_channel** | **str** | How and to whom the package is made available. | [optional] 
**features** | **List[str]** | Noteworthy features (if any) of this app. | [optional] 
**full_description** | **str** | Full app description, if available. | [optional] 
**icon_url** | **str** | A link to an image that can be used as an icon for the app. This image is suitable for use up to a pixel size of 512 x 512. | [optional] 
**managed_properties** | [**List[ManagedProperty]**](ManagedProperty.md) | The set of managed properties available to be pre-configured for the app. | [optional] 
**min_android_sdk_version** | **int** | The minimum Android SDK necessary to run the app. | [optional] 
**name** | **str** | The name of the app in the form enterprises/{enterprise}/applications/{package_name}. | [optional] 
**permissions** | [**List[ApplicationPermission]**](ApplicationPermission.md) | The permissions required by the app. | [optional] 
**play_store_url** | **str** | A link to the (consumer) Google Play details page for the app. | [optional] 
**recent_changes** | **str** | A localised description of the recent changes made to the app. | [optional] 
**screenshot_urls** | **List[str]** | A list of screenshot links representing the app. | [optional] 
**small_icon_url** | **str** | A link to a smaller image that can be used as an icon for the app. This image is suitable for use up to a pixel size of 128 x 128. | [optional] 
**title** | **str** | The title of the app. Localized. | [optional] 
**update_time** | **str** | Output only. The approximate time (within 7 days) the app was last published. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application import Application

# TODO update the JSON string below
json = "{}"
# create an instance of Application from a JSON string
application_instance = Application.from_json(json)
# print the JSON string representation of the object
print(Application.to_json())

# convert the object into a dict
application_dict = application_instance.to_dict()
# create an instance of Application from a dict
application_from_dict = Application.from_dict(application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


