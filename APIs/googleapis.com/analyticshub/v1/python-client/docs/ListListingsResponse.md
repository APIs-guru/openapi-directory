# ListListingsResponse

Message for response to the list of Listings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**listings** | [**List[Listing]**](Listing.md) | The list of Listing. | [optional] 
**next_page_token** | **str** | A token to request the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_listings_response import ListListingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListListingsResponse from a JSON string
list_listings_response_instance = ListListingsResponse.from_json(json)
# print the JSON string representation of the object
print(ListListingsResponse.to_json())

# convert the object into a dict
list_listings_response_dict = list_listings_response_instance.to_dict()
# create an instance of ListListingsResponse from a dict
list_listings_response_from_dict = ListListingsResponse.from_dict(list_listings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


