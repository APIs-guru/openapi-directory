# GetListingsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Listing]**](Listing.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_listings_response import GetListingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetListingsResponse from a JSON string
get_listings_response_instance = GetListingsResponse.from_json(json)
# print the JSON string representation of the object
print(GetListingsResponse.to_json())

# convert the object into a dict
get_listings_response_dict = get_listings_response_instance.to_dict()
# create an instance of GetListingsResponse from a dict
get_listings_response_from_dict = GetListingsResponse.from_dict(get_listings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


