# StreamingLocatorUserDefinedContentKey

Describes the properties of a user-defined content key in the Streaming Locator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of Content Key | 
**label** | **str** | The Content Key description | [optional] 
**value** | **str** | The Content Key secret | [optional] 

## Example

```python
from openapi_client.models.streaming_locator_user_defined_content_key import StreamingLocatorUserDefinedContentKey

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingLocatorUserDefinedContentKey from a JSON string
streaming_locator_user_defined_content_key_instance = StreamingLocatorUserDefinedContentKey.from_json(json)
# print the JSON string representation of the object
print(StreamingLocatorUserDefinedContentKey.to_json())

# convert the object into a dict
streaming_locator_user_defined_content_key_dict = streaming_locator_user_defined_content_key_instance.to_dict()
# create an instance of StreamingLocatorUserDefinedContentKey from a dict
streaming_locator_user_defined_content_key_from_dict = StreamingLocatorUserDefinedContentKey.from_dict(streaming_locator_user_defined_content_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


