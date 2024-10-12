# FeedOutputConfig

Output configuration for asset feed destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pubsub_destination** | [**PubsubDestination**](PubsubDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.feed_output_config import FeedOutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of FeedOutputConfig from a JSON string
feed_output_config_instance = FeedOutputConfig.from_json(json)
# print the JSON string representation of the object
print(FeedOutputConfig.to_json())

# convert the object into a dict
feed_output_config_dict = feed_output_config_instance.to_dict()
# create an instance of FeedOutputConfig from a dict
feed_output_config_from_dict = FeedOutputConfig.from_dict(feed_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


