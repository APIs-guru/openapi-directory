# ListingsListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;androidpublisher#listingsListResponse\&quot;. | [optional] [default to 'androidpublisher#listingsListResponse']
**listings** | [**List[Listing]**](Listing.md) |  | [optional] 

## Example

```python
from openapi_client.models.listings_list_response import ListingsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListingsListResponse from a JSON string
listings_list_response_instance = ListingsListResponse.from_json(json)
# print the JSON string representation of the object
print(ListingsListResponse.to_json())

# convert the object into a dict
listings_list_response_dict = listings_list_response_instance.to_dict()
# create an instance of ListingsListResponse from a dict
listings_list_response_from_dict = ListingsListResponse.from_dict(listings_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


