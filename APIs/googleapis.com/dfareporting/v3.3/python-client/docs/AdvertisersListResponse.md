# AdvertisersListResponse

Advertiser List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertisers** | [**List[Advertiser]**](Advertiser.md) | Advertiser collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#advertisersListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 

## Example

```python
from openapi_client.models.advertisers_list_response import AdvertisersListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AdvertisersListResponse from a JSON string
advertisers_list_response_instance = AdvertisersListResponse.from_json(json)
# print the JSON string representation of the object
print(AdvertisersListResponse.to_json())

# convert the object into a dict
advertisers_list_response_dict = advertisers_list_response_instance.to_dict()
# create an instance of AdvertisersListResponse from a dict
advertisers_list_response_from_dict = AdvertisersListResponse.from_dict(advertisers_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


