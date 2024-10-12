# DefaultPayloadError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | Error Code | [optional] 
**error_detail** | **object** | If available, detailed error | [optional] 
**message** | **str** | Error Message | [optional] 

## Example

```python
from openapi_client.models.default_payload_error import DefaultPayloadError

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultPayloadError from a JSON string
default_payload_error_instance = DefaultPayloadError.from_json(json)
# print the JSON string representation of the object
print(DefaultPayloadError.to_json())

# convert the object into a dict
default_payload_error_dict = default_payload_error_instance.to_dict()
# create an instance of DefaultPayloadError from a dict
default_payload_error_from_dict = DefaultPayloadError.from_dict(default_payload_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


