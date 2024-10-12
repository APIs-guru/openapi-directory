# NoWrapper

Sets the `data` field as the HTTP body for delivery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**write_metadata** | **bool** | Optional. When true, writes the Pub/Sub message metadata to &#x60;x-goog-pubsub-:&#x60; headers of the HTTP request. Writes the Pub/Sub message attributes to &#x60;:&#x60; headers of the HTTP request. | [optional] 

## Example

```python
from openapi_client.models.no_wrapper import NoWrapper

# TODO update the JSON string below
json = "{}"
# create an instance of NoWrapper from a JSON string
no_wrapper_instance = NoWrapper.from_json(json)
# print the JSON string representation of the object
print(NoWrapper.to_json())

# convert the object into a dict
no_wrapper_dict = no_wrapper_instance.to_dict()
# create an instance of NoWrapper from a dict
no_wrapper_from_dict = NoWrapper.from_dict(no_wrapper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


