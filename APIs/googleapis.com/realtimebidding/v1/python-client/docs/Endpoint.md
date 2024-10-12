# Endpoint

Bidder endpoint that receives bid requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bid_protocol** | **str** | The protocol that the bidder endpoint is using. | [optional] 
**maximum_qps** | **str** | The maximum number of queries per second allowed to be sent to this server. | [optional] 
**name** | **str** | Output only. Name of the endpoint resource that must follow the pattern &#x60;bidders/{bidderAccountId}/endpoints/{endpointId}&#x60;, where {bidderAccountId} is the account ID of the bidder who operates this endpoint, and {endpointId} is a unique ID assigned by the server. | [optional] [readonly] 
**trading_location** | **str** | The trading location that bid requests should be sent from. See https://developers.google.com/authorized-buyers/rtb/peer-guide#trading-locations for further information. | [optional] 
**url** | **str** | Output only. The URL that bid requests should be sent to. | [optional] [readonly] 

## Example

```python
from openapi_client.models.endpoint import Endpoint

# TODO update the JSON string below
json = "{}"
# create an instance of Endpoint from a JSON string
endpoint_instance = Endpoint.from_json(json)
# print the JSON string representation of the object
print(Endpoint.to_json())

# convert the object into a dict
endpoint_dict = endpoint_instance.to_dict()
# create an instance of Endpoint from a dict
endpoint_from_dict = Endpoint.from_dict(endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


