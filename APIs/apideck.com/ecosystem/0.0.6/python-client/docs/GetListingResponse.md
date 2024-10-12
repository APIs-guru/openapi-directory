# GetListingResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Listing**](Listing.md) |  | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_listing_response import GetListingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetListingResponse from a JSON string
get_listing_response_instance = GetListingResponse.from_json(json)
# print the JSON string representation of the object
print(GetListingResponse.to_json())

# convert the object into a dict
get_listing_response_dict = get_listing_response_instance.to_dict()
# create an instance of GetListingResponse from a dict
get_listing_response_from_dict = GetListingResponse.from_dict(get_listing_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


