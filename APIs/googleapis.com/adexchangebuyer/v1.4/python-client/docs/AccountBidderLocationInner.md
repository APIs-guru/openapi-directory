# AccountBidderLocationInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bid_protocol** | **str** | The protocol that the bidder endpoint is using. OpenRTB protocols with prefix PROTOCOL_OPENRTB_PROTOBUF use proto buffer, otherwise use JSON.  Allowed values:   - PROTOCOL_ADX  - PROTOCOL_OPENRTB_2_2  - PROTOCOL_OPENRTB_2_3  - PROTOCOL_OPENRTB_2_4  - PROTOCOL_OPENRTB_2_5  - PROTOCOL_OPENRTB_PROTOBUF_2_3  - PROTOCOL_OPENRTB_PROTOBUF_2_4  - PROTOCOL_OPENRTB_PROTOBUF_2_5 | [optional] 
**maximum_qps** | **int** | The maximum queries per second the Ad Exchange will send. | [optional] 
**region** | **str** | The geographical region the Ad Exchange should send requests from. Only used by some quota systems, but always setting the value is recommended. Allowed values:   - ASIA  - EUROPE  - US_EAST  - US_WEST | [optional] 
**url** | **str** | The URL to which the Ad Exchange will send bid requests. | [optional] 

## Example

```python
from openapi_client.models.account_bidder_location_inner import AccountBidderLocationInner

# TODO update the JSON string below
json = "{}"
# create an instance of AccountBidderLocationInner from a JSON string
account_bidder_location_inner_instance = AccountBidderLocationInner.from_json(json)
# print the JSON string representation of the object
print(AccountBidderLocationInner.to_json())

# convert the object into a dict
account_bidder_location_inner_dict = account_bidder_location_inner_instance.to_dict()
# create an instance of AccountBidderLocationInner from a dict
account_bidder_location_inner_from_dict = AccountBidderLocationInner.from_dict(account_bidder_location_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


