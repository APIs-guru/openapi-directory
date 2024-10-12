# Listing


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_description** | **str** | Full description of the app; this may be up to 4000 characters in length. | [optional] 
**language** | **str** | Language localization code (for example, \&quot;de-AT\&quot; for Austrian German). | [optional] 
**short_description** | **str** | Short description of the app (previously known as promo text); this may be up to 80 characters in length. | [optional] 
**title** | **str** | App&#39;s localized title. | [optional] 
**video** | **str** | URL of a promotional YouTube video for the app. | [optional] 

## Example

```python
from openapi_client.models.listing import Listing

# TODO update the JSON string below
json = "{}"
# create an instance of Listing from a JSON string
listing_instance = Listing.from_json(json)
# print the JSON string representation of the object
print(Listing.to_json())

# convert the object into a dict
listing_dict = listing_instance.to_dict()
# create an instance of Listing from a dict
listing_from_dict = Listing.from_dict(listing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


