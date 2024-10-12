# Subscription

A subscription represents a subscribers' access to a particular set of published data. It contains references to associated listings, data exchanges, and linked datasets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **str** | Output only. Timestamp when the subscription was created. | [optional] [readonly] 
**data_exchange** | **str** | Output only. Resource name of the source Data Exchange. e.g. projects/123/locations/US/dataExchanges/456 | [optional] [readonly] 
**last_modify_time** | **str** | Output only. Timestamp when the subscription was last modified. | [optional] [readonly] 
**linked_dataset_map** | [**Dict[str, LinkedResource]**](LinkedResource.md) | Output only. Map of listing resource names to associated linked resource, e.g. projects/123/locations/US/dataExchanges/456/listings/789 -&gt; projects/123/datasets/my_dataset For listing-level subscriptions, this is a map of size 1. Only contains values if state &#x3D;&#x3D; STATE_ACTIVE. | [optional] [readonly] 
**listing** | **str** | Output only. Resource name of the source Listing. e.g. projects/123/locations/US/dataExchanges/456/listings/789 | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the subscription. e.g. &#x60;projects/myproject/locations/US/subscriptions/123&#x60;. | [optional] [readonly] 
**organization_display_name** | **str** | Output only. Display name of the project of this subscription. | [optional] [readonly] 
**organization_id** | **str** | Output only. Organization of the project this subscription belongs to. | [optional] [readonly] 
**state** | **str** | Output only. Current state of the subscription. | [optional] [readonly] 
**subscriber_contact** | **str** | Output only. Email of the subscriber. | [optional] [readonly] 

## Example

```python
from openapi_client.models.subscription import Subscription

# TODO update the JSON string below
json = "{}"
# create an instance of Subscription from a JSON string
subscription_instance = Subscription.from_json(json)
# print the JSON string representation of the object
print(Subscription.to_json())

# convert the object into a dict
subscription_dict = subscription_instance.to_dict()
# create an instance of Subscription from a dict
subscription_from_dict = Subscription.from_dict(subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


