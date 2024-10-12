# ListingNestMedia


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**photo_links** | **List[str]** | A list of photo urls for the car | [optional] 
**photo_links_cached** | **List[str]** | A list of cached photo urls for the car | [optional] 

## Example

```python
from openapi_client.models.listing_nest_media import ListingNestMedia

# TODO update the JSON string below
json = "{}"
# create an instance of ListingNestMedia from a JSON string
listing_nest_media_instance = ListingNestMedia.from_json(json)
# print the JSON string representation of the object
print(ListingNestMedia.to_json())

# convert the object into a dict
listing_nest_media_dict = listing_nest_media_instance.to_dict()
# create an instance of ListingNestMedia from a dict
listing_nest_media_from_dict = ListingNestMedia.from_dict(listing_nest_media_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


