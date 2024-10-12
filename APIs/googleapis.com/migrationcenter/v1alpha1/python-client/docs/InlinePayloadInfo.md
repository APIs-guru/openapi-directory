# InlinePayloadInfo

A resource that represents the inline import job payload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | The import job format. | [optional] 
**payload** | [**List[PayloadFile]**](PayloadFile.md) | List of payload files. | [optional] 

## Example

```python
from openapi_client.models.inline_payload_info import InlinePayloadInfo

# TODO update the JSON string below
json = "{}"
# create an instance of InlinePayloadInfo from a JSON string
inline_payload_info_instance = InlinePayloadInfo.from_json(json)
# print the JSON string representation of the object
print(InlinePayloadInfo.to_json())

# convert the object into a dict
inline_payload_info_dict = inline_payload_info_instance.to_dict()
# create an instance of InlinePayloadInfo from a dict
inline_payload_info_from_dict = InlinePayloadInfo.from_dict(inline_payload_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


