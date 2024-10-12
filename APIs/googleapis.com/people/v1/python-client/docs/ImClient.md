# ImClient

A person's instant messaging client.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formatted_protocol** | **str** | Output only. The protocol of the IM client formatted in the viewer&#39;s account locale or the &#x60;Accept-Language&#x60; HTTP header locale. | [optional] [readonly] 
**formatted_type** | **str** | Output only. The type of the IM client translated and formatted in the viewer&#39;s account locale or the &#x60;Accept-Language&#x60; HTTP header locale. | [optional] [readonly] 
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**protocol** | **str** | The protocol of the IM client. The protocol can be custom or one of these predefined values: * &#x60;aim&#x60; * &#x60;msn&#x60; * &#x60;yahoo&#x60; * &#x60;skype&#x60; * &#x60;qq&#x60; * &#x60;googleTalk&#x60; * &#x60;icq&#x60; * &#x60;jabber&#x60; * &#x60;netMeeting&#x60; | [optional] 
**type** | **str** | The type of the IM client. The type can be custom or one of these predefined values: * &#x60;home&#x60; * &#x60;work&#x60; * &#x60;other&#x60; | [optional] 
**username** | **str** | The user name used in the IM client. | [optional] 

## Example

```python
from openapi_client.models.im_client import ImClient

# TODO update the JSON string below
json = "{}"
# create an instance of ImClient from a JSON string
im_client_instance = ImClient.from_json(json)
# print the JSON string representation of the object
print(ImClient.to_json())

# convert the object into a dict
im_client_dict = im_client_instance.to_dict()
# create an instance of ImClient from a dict
im_client_from_dict = ImClient.from_dict(im_client_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


