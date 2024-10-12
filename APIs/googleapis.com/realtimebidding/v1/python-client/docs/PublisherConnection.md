# PublisherConnection

An Open Bidding exchange's connection to a publisher. This is initiated by the publisher for the bidder to review. If approved by the bidder, this means that the bidder agrees to receive bid requests from the publisher.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bidding_state** | **str** | Whether the publisher has been approved by the bidder. | [optional] 
**create_time** | **str** | Output only. The time at which the publisher initiated a connection with the bidder (irrespective of if or when the bidder approves it). This is subsequently updated if the publisher revokes and re-initiates the connection. | [optional] [readonly] 
**display_name** | **str** | Output only. Publisher display name. | [optional] [readonly] 
**name** | **str** | Output only. Name of the publisher connection. This follows the pattern &#x60;bidders/{bidder}/publisherConnections/{publisher}&#x60;, where &#x60;{bidder}&#x60; represents the account ID of the bidder, and &#x60;{publisher}&#x60; is the ads.txt/app-ads.txt publisher ID. | [optional] [readonly] 
**publisher_platform** | **str** | Output only. Whether the publisher is an Ad Manager or AdMob publisher. | [optional] [readonly] 

## Example

```python
from openapi_client.models.publisher_connection import PublisherConnection

# TODO update the JSON string below
json = "{}"
# create an instance of PublisherConnection from a JSON string
publisher_connection_instance = PublisherConnection.from_json(json)
# print the JSON string representation of the object
print(PublisherConnection.to_json())

# convert the object into a dict
publisher_connection_dict = publisher_connection_instance.to_dict()
# create an instance of PublisherConnection from a dict
publisher_connection_from_dict = PublisherConnection.from_dict(publisher_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


