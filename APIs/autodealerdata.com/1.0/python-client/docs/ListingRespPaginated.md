# ListingRespPaginated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**listings** | [**List[Listing]**](Listing.md) |  | 
**max_pages** | **int** |  | 
**page** | **int** |  | 

## Example

```python
from openapi_client.models.listing_resp_paginated import ListingRespPaginated

# TODO update the JSON string below
json = "{}"
# create an instance of ListingRespPaginated from a JSON string
listing_resp_paginated_instance = ListingRespPaginated.from_json(json)
# print the JSON string representation of the object
print(ListingRespPaginated.to_json())

# convert the object into a dict
listing_resp_paginated_dict = listing_resp_paginated_instance.to_dict()
# create an instance of ListingRespPaginated from a dict
listing_resp_paginated_from_dict = ListingRespPaginated.from_dict(listing_resp_paginated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


