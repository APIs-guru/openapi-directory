# OfferResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_details** | [**OfferDetails**](OfferDetails.md) |  | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.offer_response import OfferResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OfferResponse from a JSON string
offer_response_instance = OfferResponse.from_json(json)
# print the JSON string representation of the object
print(OfferResponse.to_json())

# convert the object into a dict
offer_response_dict = offer_response_instance.to_dict()
# create an instance of OfferResponse from a dict
offer_response_from_dict = OfferResponse.from_dict(offer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


