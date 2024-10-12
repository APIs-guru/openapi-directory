# DefaultPayload

default payload for object for all HTTP codes that are not covered individually

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**DefaultPayloadError**](DefaultPayloadError.md) |  | [optional] 

## Example

```python
from openapi_client.models.default_payload import DefaultPayload

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultPayload from a JSON string
default_payload_instance = DefaultPayload.from_json(json)
# print the JSON string representation of the object
print(DefaultPayload.to_json())

# convert the object into a dict
default_payload_dict = default_payload_instance.to_dict()
# create an instance of DefaultPayload from a dict
default_payload_from_dict = DefaultPayload.from_dict(default_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


