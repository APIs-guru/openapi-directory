# AdUpdateResponse

A type that contains the fields for the ad update response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_id** | **str** | A unique eBay-assigned ID that is generated when the ad is created. | [optional] 
**errors** | [**List[Error]**](Error.md) | A list of errors associated with the specified listing ID. | [optional] 
**href** | **str** | The URI for the ad, which can be used to retrieve the ad. | [optional] 
**listing_id** | **str** | A unique eBay-assigned ID that is generated when the listing is created. | [optional] 
**status_code** | **int** | An HTTP status code that indicates the response-status of the request. | [optional] 

## Example

```python
from openapi_client.models.ad_update_response import AdUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AdUpdateResponse from a JSON string
ad_update_response_instance = AdUpdateResponse.from_json(json)
# print the JSON string representation of the object
print(AdUpdateResponse.to_json())

# convert the object into a dict
ad_update_response_dict = ad_update_response_instance.to_dict()
# create an instance of AdUpdateResponse from a dict
ad_update_response_from_dict = AdUpdateResponse.from_dict(ad_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


