# ListingMedia


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier representing a specific listing from the Marketcheck database | [optional] 
**photo_links** | **List[str]** | A list of photo urls for the car | [optional] 
**photo_url** | **str** | Single photo url of the car | [optional] 

## Example

```python
from openapi_client.models.listing_media import ListingMedia

# TODO update the JSON string below
json = "{}"
# create an instance of ListingMedia from a JSON string
listing_media_instance = ListingMedia.from_json(json)
# print the JSON string representation of the object
print(ListingMedia.to_json())

# convert the object into a dict
listing_media_dict = listing_media_instance.to_dict()
# create an instance of ListingMedia from a dict
listing_media_from_dict = ListingMedia.from_dict(listing_media_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


