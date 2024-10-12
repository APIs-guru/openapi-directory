# ListingResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand_name** | **str** |  | [optional] 
**cache_time_limit** | **int** |  | [optional] [default to 600]
**condition** | **str** |  | [optional] 
**data** | [**ListingRespPaginated**](ListingRespPaginated.md) |  | 
**end_date** | **date** |  | [optional] 
**model_name** | **str** |  | [optional] 
**msg** | **str** |  | [optional] 
**region_name** | **str** |  | [optional] 
**start_date** | **date** |  | [optional] 

## Example

```python
from openapi_client.models.listing_resp import ListingResp

# TODO update the JSON string below
json = "{}"
# create an instance of ListingResp from a JSON string
listing_resp_instance = ListingResp.from_json(json)
# print the JSON string representation of the object
print(ListingResp.to_json())

# convert the object into a dict
listing_resp_dict = listing_resp_instance.to_dict()
# create an instance of ListingResp from a dict
listing_resp_from_dict = ListingResp.from_dict(listing_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


