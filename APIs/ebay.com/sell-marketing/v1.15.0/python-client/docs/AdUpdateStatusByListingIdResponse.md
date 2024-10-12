# AdUpdateStatusByListingIdResponse

A type that contains the fields for the ad update status by listing ID response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_id** | **str** | A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model. | [optional] 
**errors** | [**List[Error]**](Error.md) | A list of errors associated with the specified listing ID. | [optional] 
**href** | **str** | The URI for the ad, which can be used to retrieve the ad. | [optional] 
**listing_id** | **str** | A unique eBay-assigned ID that is generated when the listing is created. | [optional] 
**status_code** | **int** | An HTTP status code that indicates the response-status of the request. | [optional] 

## Example

```python
from openapi_client.models.ad_update_status_by_listing_id_response import AdUpdateStatusByListingIdResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AdUpdateStatusByListingIdResponse from a JSON string
ad_update_status_by_listing_id_response_instance = AdUpdateStatusByListingIdResponse.from_json(json)
# print the JSON string representation of the object
print(AdUpdateStatusByListingIdResponse.to_json())

# convert the object into a dict
ad_update_status_by_listing_id_response_dict = ad_update_status_by_listing_id_response_instance.to_dict()
# create an instance of AdUpdateStatusByListingIdResponse from a dict
ad_update_status_by_listing_id_response_from_dict = AdUpdateStatusByListingIdResponse.from_dict(ad_update_status_by_listing_id_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


