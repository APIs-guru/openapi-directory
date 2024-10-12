# Product

A Products resource represents an app in the Google Play store that is available to at least some users in the enterprise. (Some apps are restricted to a single enterprise, and no information about them is made available outside that enterprise.) The information provided for each product (localized name, icon, link to the full Google Play details page) is intended to allow a basic representation of the product within an EMM user interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_restrictions_schema** | [**AppRestrictionsSchema**](AppRestrictionsSchema.md) |  | [optional] 
**app_tracks** | [**List[TrackInfo]**](TrackInfo.md) | The tracks visible to the enterprise. | [optional] 
**app_version** | [**List[AppVersion]**](AppVersion.md) | App versions currently available for this product. | [optional] 
**author_name** | **str** | The name of the author of the product (for example, the app developer). | [optional] 
**available_countries** | **List[str]** | The countries which this app is available in. | [optional] 
**available_tracks** | **List[str]** | Deprecated, use appTracks instead. | [optional] 
**category** | **str** | The app category (e.g. RACING, SOCIAL, etc.) | [optional] 
**content_rating** | **str** | The content rating for this app. | [optional] 
**description** | **str** | The localized promotional description, if available. | [optional] 
**details_url** | **str** | A link to the (consumer) Google Play details page for the product. | [optional] 
**distribution_channel** | **str** | How and to whom the package is made available. The value publicGoogleHosted means that the package is available through the Play store and not restricted to a specific enterprise. The value privateGoogleHosted means that the package is a private app (restricted to an enterprise) but hosted by Google. The value privateSelfHosted means that the package is a private app (restricted to an enterprise) and is privately hosted. | [optional] 
**features** | **List[str]** | Noteworthy features (if any) of this product. | [optional] 
**full_description** | **str** | The localized full app store description, if available. | [optional] 
**icon_url** | **str** | A link to an image that can be used as an icon for the product. This image is suitable for use at up to 512px x 512px. | [optional] 
**last_updated_timestamp_millis** | **str** | The approximate time (within 7 days) the app was last published, expressed in milliseconds since epoch. | [optional] 
**min_android_sdk_version** | **int** | The minimum Android SDK necessary to run the app. | [optional] 
**permissions** | [**List[ProductPermission]**](ProductPermission.md) | A list of permissions required by the app. | [optional] 
**product_id** | **str** | A string of the form *app:&lt;package name&gt;*. For example, app:com.google.android.gm represents the Gmail app. | [optional] 
**product_pricing** | **str** | Whether this product is free, free with in-app purchases, or paid. If the pricing is unknown, this means the product is not generally available anymore (even though it might still be available to people who own it). | [optional] 
**recent_changes** | **str** | A description of the recent changes made to the app. | [optional] 
**requires_container_app** | **bool** | Deprecated. | [optional] 
**screenshot_urls** | **List[str]** | A list of screenshot links representing the app. | [optional] 
**signing_certificate** | [**ProductSigningCertificate**](ProductSigningCertificate.md) |  | [optional] 
**small_icon_url** | **str** | A link to a smaller image that can be used as an icon for the product. This image is suitable for use at up to 128px x 128px. | [optional] 
**title** | **str** | The name of the product. | [optional] 
**work_details_url** | **str** | A link to the managed Google Play details page for the product, for use by an Enterprise admin. | [optional] 

## Example

```python
from openapi_client.models.product import Product

# TODO update the JSON string below
json = "{}"
# create an instance of Product from a JSON string
product_instance = Product.from_json(json)
# print the JSON string representation of the object
print(Product.to_json())

# convert the object into a dict
product_dict = product_instance.to_dict()
# create an instance of Product from a dict
product_from_dict = Product.from_dict(product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


