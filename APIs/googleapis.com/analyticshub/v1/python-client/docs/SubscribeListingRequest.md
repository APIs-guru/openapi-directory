# SubscribeListingRequest

Message for subscribing to a listing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_dataset** | [**DestinationDataset**](DestinationDataset.md) |  | [optional] 

## Example

```python
from openapi_client.models.subscribe_listing_request import SubscribeListingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SubscribeListingRequest from a JSON string
subscribe_listing_request_instance = SubscribeListingRequest.from_json(json)
# print the JSON string representation of the object
print(SubscribeListingRequest.to_json())

# convert the object into a dict
subscribe_listing_request_dict = subscribe_listing_request_instance.to_dict()
# create an instance of SubscribeListingRequest from a dict
subscribe_listing_request_from_dict = SubscribeListingRequest.from_dict(subscribe_listing_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


