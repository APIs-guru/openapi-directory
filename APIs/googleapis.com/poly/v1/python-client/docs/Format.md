# Format

The same asset can be represented in different formats, for example, a [WaveFront .obj](//en.wikipedia.org/wiki/Wavefront_.obj_file) file with its corresponding .mtl file or a [Khronos glTF](//www.khronos.org/gltf) file with its corresponding .glb binary data. A format refers to a specific representation of an asset and contains all information needed to retrieve and describe this representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format_complexity** | [**FormatComplexity**](FormatComplexity.md) |  | [optional] 
**format_type** | **str** | A short string that identifies the format type of this representation. Possible values are: &#x60;FBX&#x60;, &#x60;GLTF&#x60;, &#x60;GLTF2&#x60;, &#x60;OBJ&#x60;, and &#x60;TILT&#x60;. | [optional] 
**resources** | [**List[File]**](File.md) | A list of dependencies of the root element. May include, but is not limited to, materials, textures, and shader programs. | [optional] 
**root** | [**File**](File.md) |  | [optional] 

## Example

```python
from openapi_client.models.format import Format

# TODO update the JSON string below
json = "{}"
# create an instance of Format from a JSON string
format_instance = Format.from_json(json)
# print the JSON string representation of the object
print(Format.to_json())

# convert the object into a dict
format_dict = format_instance.to_dict()
# create an instance of Format from a dict
format_from_dict = Format.from_dict(format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


