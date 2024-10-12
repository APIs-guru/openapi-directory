# ManifestAttributes

Manifest attributes details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_name** | **str** | Image name | [optional] 
**manifest** | [**ManifestAttributesBase**](ManifestAttributesBase.md) |  | [optional] 
**registry** | **str** | Registry name | [optional] 

## Example

```python
from openapi_client.models.manifest_attributes import ManifestAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ManifestAttributes from a JSON string
manifest_attributes_instance = ManifestAttributes.from_json(json)
# print the JSON string representation of the object
print(ManifestAttributes.to_json())

# convert the object into a dict
manifest_attributes_dict = manifest_attributes_instance.to_dict()
# create an instance of ManifestAttributes from a dict
manifest_attributes_from_dict = ManifestAttributes.from_dict(manifest_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


