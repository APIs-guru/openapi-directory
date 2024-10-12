# AdvertiserLandingPagesListResponse

Landing Page List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#advertiserLandingPagesListResponse\&quot;. | [optional] 
**landing_pages** | [**List[LandingPage]**](LandingPage.md) | Landing page collection | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 

## Example

```python
from openapi_client.models.advertiser_landing_pages_list_response import AdvertiserLandingPagesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AdvertiserLandingPagesListResponse from a JSON string
advertiser_landing_pages_list_response_instance = AdvertiserLandingPagesListResponse.from_json(json)
# print the JSON string representation of the object
print(AdvertiserLandingPagesListResponse.to_json())

# convert the object into a dict
advertiser_landing_pages_list_response_dict = advertiser_landing_pages_list_response_instance.to_dict()
# create an instance of AdvertiserLandingPagesListResponse from a dict
advertiser_landing_pages_list_response_from_dict = AdvertiserLandingPagesListResponse.from_dict(advertiser_landing_pages_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


