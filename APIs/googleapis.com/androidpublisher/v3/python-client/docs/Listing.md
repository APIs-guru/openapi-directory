# Listing

A localized store listing. The resource for ListingsService.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_description** | **str** | Full description of the app. | [optional] 
**language** | **str** | Language localization code (a BCP-47 language tag; for example, \&quot;de-AT\&quot; for Austrian German). | [optional] 
**short_description** | **str** | Short description of the app. | [optional] 
**title** | **str** | Localized title of the app. | [optional] 
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


