# V2Manifest

Returns the requested Docker V2 Manifest file

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**Descriptor**](Descriptor.md) |  | [optional] 
**layers** | [**List[Descriptor]**](Descriptor.md) | List of V2 image layer information | [optional] 
**media_type** | **str** | Media type for this Manifest | [optional] 
**schema_version** | **int** | Schema version | [optional] 

## Example

```python
from openapi_client.models.v2_manifest import V2Manifest

# TODO update the JSON string below
json = "{}"
# create an instance of V2Manifest from a JSON string
v2_manifest_instance = V2Manifest.from_json(json)
# print the JSON string representation of the object
print(V2Manifest.to_json())

# convert the object into a dict
v2_manifest_dict = v2_manifest_instance.to_dict()
# create an instance of V2Manifest from a dict
v2_manifest_from_dict = V2Manifest.from_dict(v2_manifest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


