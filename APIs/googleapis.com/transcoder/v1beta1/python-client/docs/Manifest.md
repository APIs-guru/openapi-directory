# Manifest

Manifest configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_name** | **str** | The name of the generated file. The default is &#x60;\&quot;manifest\&quot;&#x60; with the extension suffix corresponding to the &#x60;Manifest.type&#x60;. | [optional] 
**mux_streams** | **List[str]** | Required. List of user given &#x60;MuxStream.key&#x60;s that should appear in this manifest. When &#x60;Manifest.type&#x60; is &#x60;HLS&#x60;, a media manifest with name &#x60;MuxStream.key&#x60; and &#x60;.m3u8&#x60; extension is generated for each element of the &#x60;Manifest.mux_streams&#x60;. | [optional] 
**type** | **str** | Required. Type of the manifest, can be \&quot;HLS\&quot; or \&quot;DASH\&quot;. | [optional] 

## Example

```python
from openapi_client.models.manifest import Manifest

# TODO update the JSON string below
json = "{}"
# create an instance of Manifest from a JSON string
manifest_instance = Manifest.from_json(json)
# print the JSON string representation of the object
print(Manifest.to_json())

# convert the object into a dict
manifest_dict = manifest_instance.to_dict()
# create an instance of Manifest from a dict
manifest_from_dict = Manifest.from_dict(manifest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


