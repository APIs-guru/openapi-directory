# RegenerateTestKeyRequestPayload

Regenerate test key request payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_type** | **str** | Type of the test key | 

## Example

```python
from openapi_client.models.regenerate_test_key_request_payload import RegenerateTestKeyRequestPayload

# TODO update the JSON string below
json = "{}"
# create an instance of RegenerateTestKeyRequestPayload from a JSON string
regenerate_test_key_request_payload_instance = RegenerateTestKeyRequestPayload.from_json(json)
# print the JSON string representation of the object
print(RegenerateTestKeyRequestPayload.to_json())

# convert the object into a dict
regenerate_test_key_request_payload_dict = regenerate_test_key_request_payload_instance.to_dict()
# create an instance of RegenerateTestKeyRequestPayload from a dict
regenerate_test_key_request_payload_from_dict = RegenerateTestKeyRequestPayload.from_dict(regenerate_test_key_request_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


