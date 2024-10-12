# PubsubDestination

A Pub/Sub destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**topic** | **str** | The name of the Pub/Sub topic to publish job completion notification to. For example: &#x60;projects/{project}/topics/{topic}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.pubsub_destination import PubsubDestination

# TODO update the JSON string below
json = "{}"
# create an instance of PubsubDestination from a JSON string
pubsub_destination_instance = PubsubDestination.from_json(json)
# print the JSON string representation of the object
print(PubsubDestination.to_json())

# convert the object into a dict
pubsub_destination_dict = pubsub_destination_instance.to_dict()
# create an instance of PubsubDestination from a dict
pubsub_destination_from_dict = PubsubDestination.from_dict(pubsub_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


