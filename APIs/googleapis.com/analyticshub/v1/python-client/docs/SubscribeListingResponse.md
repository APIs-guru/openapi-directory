# SubscribeListingResponse

Message for response when you subscribe to a listing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription** | [**Subscription**](Subscription.md) |  | [optional] 

## Example

```python
from openapi_client.models.subscribe_listing_response import SubscribeListingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubscribeListingResponse from a JSON string
subscribe_listing_response_instance = SubscribeListingResponse.from_json(json)
# print the JSON string representation of the object
print(SubscribeListingResponse.to_json())

# convert the object into a dict
subscribe_listing_response_dict = subscribe_listing_response_instance.to_dict()
# create an instance of SubscribeListingResponse from a dict
subscribe_listing_response_from_dict = SubscribeListingResponse.from_dict(subscribe_listing_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


