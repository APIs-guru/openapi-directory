# AdsListResponse

Ad List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ads** | [**List[Ad]**](Ad.md) | Ad collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#adsListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 

## Example

```python
from openapi_client.models.ads_list_response import AdsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AdsListResponse from a JSON string
ads_list_response_instance = AdsListResponse.from_json(json)
# print the JSON string representation of the object
print(AdsListResponse.to_json())

# convert the object into a dict
ads_list_response_dict = ads_list_response_instance.to_dict()
# create an instance of AdsListResponse from a dict
ads_list_response_from_dict = AdsListResponse.from_dict(ads_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


