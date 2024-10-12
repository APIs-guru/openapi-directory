# InterconnectAttachment

InterconnectAttachment that this route applies to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region** | **str** | Optional. Cloud region to install this policy-based route on interconnect attachment. Use &#x60;all&#x60; to install it on all interconnect attachments. | [optional] 

## Example

```python
from openapi_client.models.interconnect_attachment import InterconnectAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of InterconnectAttachment from a JSON string
interconnect_attachment_instance = InterconnectAttachment.from_json(json)
# print the JSON string representation of the object
print(InterconnectAttachment.to_json())

# convert the object into a dict
interconnect_attachment_dict = interconnect_attachment_instance.to_dict()
# create an instance of InterconnectAttachment from a dict
interconnect_attachment_from_dict = InterconnectAttachment.from_dict(interconnect_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


