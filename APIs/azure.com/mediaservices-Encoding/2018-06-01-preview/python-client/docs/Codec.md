# Codec

Describes the basic properties of all codecs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** | The discriminator for derived types. | 
**label** | **str** | An optional label for the codec. The label can be used to control muxing behavior. | [optional] 

## Example

```python
from openapi_client.models.codec import Codec

# TODO update the JSON string below
json = "{}"
# create an instance of Codec from a JSON string
codec_instance = Codec.from_json(json)
# print the JSON string representation of the object
print(Codec.to_json())

# convert the object into a dict
codec_dict = codec_instance.to_dict()
# create an instance of Codec from a dict
codec_from_dict = Codec.from_dict(codec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


