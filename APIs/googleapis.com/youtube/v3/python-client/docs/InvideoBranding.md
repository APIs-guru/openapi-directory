# InvideoBranding

LINT.IfChange Describes an invideo branding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_bytes** | **bytearray** | The bytes the uploaded image. Only used in api to youtube communication. | [optional] 
**image_url** | **str** | The url of the uploaded image. Only used in apiary to api communication. | [optional] 
**position** | [**InvideoPosition**](InvideoPosition.md) |  | [optional] 
**target_channel_id** | **str** | The channel to which this branding links. If not present it defaults to the current channel. | [optional] 
**timing** | [**InvideoTiming**](InvideoTiming.md) |  | [optional] 

## Example

```python
from openapi_client.models.invideo_branding import InvideoBranding

# TODO update the JSON string below
json = "{}"
# create an instance of InvideoBranding from a JSON string
invideo_branding_instance = InvideoBranding.from_json(json)
# print the JSON string representation of the object
print(InvideoBranding.to_json())

# convert the object into a dict
invideo_branding_dict = invideo_branding_instance.to_dict()
# create an instance of InvideoBranding from a dict
invideo_branding_from_dict = InvideoBranding.from_dict(invideo_branding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


