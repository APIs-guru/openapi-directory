# CustomRPManifest

A manifest file that defines the custom resource provider resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | The manifest for the custom resource provider | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.custom_rp_manifest import CustomRPManifest

# TODO update the JSON string below
json = "{}"
# create an instance of CustomRPManifest from a JSON string
custom_rp_manifest_instance = CustomRPManifest.from_json(json)
# print the JSON string representation of the object
print(CustomRPManifest.to_json())

# convert the object into a dict
custom_rp_manifest_dict = custom_rp_manifest_instance.to_dict()
# create an instance of CustomRPManifest from a dict
custom_rp_manifest_from_dict = CustomRPManifest.from_dict(custom_rp_manifest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


