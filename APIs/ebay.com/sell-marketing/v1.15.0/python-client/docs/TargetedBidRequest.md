# TargetedBidRequest

A type that defines the targeted bid.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keywords** | [**List[KeywordRequest]**](KeywordRequest.md) | A list of keywords in the paginated collection. &lt;br /&gt;&lt;br /&gt;&lt;b&gt;Maximum number of keywords: &lt;/b&gt;500 | [optional] 

## Example

```python
from openapi_client.models.targeted_bid_request import TargetedBidRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TargetedBidRequest from a JSON string
targeted_bid_request_instance = TargetedBidRequest.from_json(json)
# print the JSON string representation of the object
print(TargetedBidRequest.to_json())

# convert the object into a dict
targeted_bid_request_dict = targeted_bid_request_instance.to_dict()
# create an instance of TargetedBidRequest from a dict
targeted_bid_request_from_dict = TargetedBidRequest.from_dict(targeted_bid_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


