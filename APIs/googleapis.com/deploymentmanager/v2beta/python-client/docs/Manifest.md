# Manifest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ConfigFile**](ConfigFile.md) |  | [optional] 
**expanded_config** | **str** | Output only. The fully-expanded configuration file, including any templates and references. | [optional] 
**id** | **str** |  | [optional] 
**imports** | [**List[ImportFile]**](ImportFile.md) | Output only. The imported files for this manifest. | [optional] 
**insert_time** | **str** | Output only. Creation timestamp in RFC3339 text format. | [optional] 
**layout** | **str** | Output only. The YAML layout for this manifest. | [optional] 
**manifest_size_bytes** | **str** | Output only. The computed size of the fully expanded manifest. | [optional] 
**manifest_size_limit_bytes** | **str** | Output only. The size limit for expanded manifests in the project. | [optional] 
**name** | **str** | Output only. The name of the manifest. | [optional] 
**self_link** | **str** | Output only. Self link for the manifest. | [optional] 

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


