# WatchTarget

The target for notification delivery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**topic** | [**CloudPubsubTopic**](CloudPubsubTopic.md) |  | [optional] 

## Example

```python
from openapi_client.models.watch_target import WatchTarget

# TODO update the JSON string below
json = "{}"
# create an instance of WatchTarget from a JSON string
watch_target_instance = WatchTarget.from_json(json)
# print the JSON string representation of the object
print(WatchTarget.to_json())

# convert the object into a dict
watch_target_dict = watch_target_instance.to_dict()
# create an instance of WatchTarget from a dict
watch_target_from_dict = WatchTarget.from_dict(watch_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


