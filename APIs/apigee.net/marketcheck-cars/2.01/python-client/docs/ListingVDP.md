# ListingVDP

Describes the VDP (Vehicle Details Page) HTML object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crawled_at** | **float** | The timestamp indicating the time when the VDP was cached | [optional] 
**html** | **str** | The HTML string for the listing web page | [optional] 
**vdp_url** | **str** | The URL of the VDP | [optional] 

## Example

```python
from openapi_client.models.listing_vdp import ListingVDP

# TODO update the JSON string below
json = "{}"
# create an instance of ListingVDP from a JSON string
listing_vdp_instance = ListingVDP.from_json(json)
# print the JSON string representation of the object
print(ListingVDP.to_json())

# convert the object into a dict
listing_vdp_dict = listing_vdp_instance.to_dict()
# create an instance of ListingVDP from a dict
listing_vdp_from_dict = ListingVDP.from_dict(listing_vdp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


