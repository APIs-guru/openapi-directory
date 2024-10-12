# ApkListing


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | **str** | The language code, in BCP 47 format (eg \&quot;en-US\&quot;). | [optional] 
**recent_changes** | **str** | Describe what&#39;s new in your APK. | [optional] 

## Example

```python
from openapi_client.models.apk_listing import ApkListing

# TODO update the JSON string below
json = "{}"
# create an instance of ApkListing from a JSON string
apk_listing_instance = ApkListing.from_json(json)
# print the JSON string representation of the object
print(ApkListing.to_json())

# convert the object into a dict
apk_listing_dict = apk_listing_instance.to_dict()
# create an instance of ApkListing from a dict
apk_listing_from_dict = ApkListing.from_dict(apk_listing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


