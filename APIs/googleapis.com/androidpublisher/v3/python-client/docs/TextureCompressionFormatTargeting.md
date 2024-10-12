# TextureCompressionFormatTargeting

Targeting by a texture compression format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternatives** | [**List[TextureCompressionFormat]**](TextureCompressionFormat.md) | List of alternative TCFs (TCFs targeted by the sibling splits). | [optional] 
**value** | [**List[TextureCompressionFormat]**](TextureCompressionFormat.md) | The list of targeted TCFs. Should not be empty. | [optional] 

## Example

```python
from openapi_client.models.texture_compression_format_targeting import TextureCompressionFormatTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of TextureCompressionFormatTargeting from a JSON string
texture_compression_format_targeting_instance = TextureCompressionFormatTargeting.from_json(json)
# print the JSON string representation of the object
print(TextureCompressionFormatTargeting.to_json())

# convert the object into a dict
texture_compression_format_targeting_dict = texture_compression_format_targeting_instance.to_dict()
# create an instance of TextureCompressionFormatTargeting from a dict
texture_compression_format_targeting_from_dict = TextureCompressionFormatTargeting.from_dict(texture_compression_format_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


