# PubsubLocation

Identifies a pubsub location to use for transferring data into or out of a streaming Dataflow job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drop_late_data** | **bool** | Indicates whether the pipeline allows late-arriving data. | [optional] 
**dynamic_destinations** | **bool** | If true, then this location represents dynamic topics. | [optional] 
**id_label** | **str** | If set, contains a pubsub label from which to extract record ids. If left empty, record deduplication will be strictly best effort. | [optional] 
**subscription** | **str** | A pubsub subscription, in the form of \&quot;pubsub.googleapis.com/subscriptions//\&quot; | [optional] 
**timestamp_label** | **str** | If set, contains a pubsub label from which to extract record timestamps. If left empty, record timestamps will be generated upon arrival. | [optional] 
**topic** | **str** | A pubsub topic, in the form of \&quot;pubsub.googleapis.com/topics//\&quot; | [optional] 
**tracking_subscription** | **str** | If set, specifies the pubsub subscription that will be used for tracking custom time timestamps for watermark estimation. | [optional] 
**with_attributes** | **bool** | If true, then the client has requested to get pubsub attributes. | [optional] 

## Example

```python
from openapi_client.models.pubsub_location import PubsubLocation

# TODO update the JSON string below
json = "{}"
# create an instance of PubsubLocation from a JSON string
pubsub_location_instance = PubsubLocation.from_json(json)
# print the JSON string representation of the object
print(PubsubLocation.to_json())

# convert the object into a dict
pubsub_location_dict = pubsub_location_instance.to_dict()
# create an instance of PubsubLocation from a dict
pubsub_location_from_dict = PubsubLocation.from_dict(pubsub_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


