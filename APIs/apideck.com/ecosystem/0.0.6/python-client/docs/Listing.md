# Listing


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automate_id** | **str** |  | [optional] 
**blendr_id** | **str** |  | [optional] 
**card_background_color** | **str** |  | [optional] 
**card_background_image** | [**File**](File.md) |  | [optional] 
**categories** | [**List[Category]**](Category.md) |  | [optional] 
**cloud_service_id** | **str** |  | [optional] 
**collections** | [**List[Collection]**](Collection.md) |  | [optional] 
**combidesk_id** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] 
**detail_page_disabled** | **bool** |  | [optional] 
**external_id** | **str** |  | [optional] [readonly] 
**features** | **str** |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**integromat_id** | **str** |  | [optional] 
**logo** | [**Logo**](Logo.md) |  | [optional] 
**media** | [**List[Media]**](Media.md) |  | [optional] 
**meta_tag_description** | **str** |  | [optional] 
**meta_tag_keywords** | **str** |  | [optional] 
**meta_tag_title** | **str** |  | [optional] 
**microsoft_flow_id** | **str** |  | [optional] 
**name** | **str** |  | 
**native_integration** | **bool** |  | [optional] 
**native_integration_link** | **str** |  | [optional] 
**partner** | [**Partner**](Partner.md) |  | [optional] 
**piesync_id** | **str** |  | [optional] 
**pricing** | **str** |  | [optional] 
**products** | [**List[Product]**](Product.md) |  | [optional] 
**published** | **bool** |  | [optional] 
**published_at** | **datetime** |  | [optional] [readonly] 
**screenshots** | [**List[Screenshot]**](Screenshot.md) |  | [optional] 
**segment_id** | **str** |  | [optional] 
**slug** | **str** |  | 
**sticky** | **bool** |  | [optional] 
**tag_line** | **str** |  | [optional] 
**third_party_integration** | **bool** |  | [optional] 
**third_party_integration_link** | **str** |  | [optional] 
**translations** | [**List[Translation]**](Translation.md) |  | [optional] 
**tray_io_id** | **str** |  | [optional] 
**unify_connector_id** | **str** |  | [optional] 
**upcoming** | **bool** |  | [optional] 
**updated_at** | **datetime** |  | [optional] [readonly] 
**zapier_id** | **str** |  | [optional] 

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


