# ListingDebugAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cycle_id** | **float** | Cycle id | [optional] 
**robot_id** | **float** | Robot id | [optional] 
**scraped_at** | **str** | Scraped date and time | [optional] 
**taxonomy_vin** | **str** | Taxonomy vin | [optional] 
**template_id** | **float** | Template id | [optional] 
**user_id** | **float** | User id | [optional] 

## Example

```python
from openapi_client.models.listing_debug_attributes import ListingDebugAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ListingDebugAttributes from a JSON string
listing_debug_attributes_instance = ListingDebugAttributes.from_json(json)
# print the JSON string representation of the object
print(ListingDebugAttributes.to_json())

# convert the object into a dict
listing_debug_attributes_dict = listing_debug_attributes_instance.to_dict()
# create an instance of ListingDebugAttributes from a dict
listing_debug_attributes_from_dict = ListingDebugAttributes.from_dict(listing_debug_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


