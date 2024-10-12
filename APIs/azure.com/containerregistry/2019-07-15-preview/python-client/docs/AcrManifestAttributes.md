# AcrManifestAttributes

Manifest attributes details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_name** | **str** | Image name | [optional] 
**manifest** | [**AcrManifestAttributesBase**](AcrManifestAttributesBase.md) |  | [optional] 
**registry** | **str** | Registry name | [optional] 

## Example

```python
from openapi_client.models.acr_manifest_attributes import AcrManifestAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AcrManifestAttributes from a JSON string
acr_manifest_attributes_instance = AcrManifestAttributes.from_json(json)
# print the JSON string representation of the object
print(AcrManifestAttributes.to_json())

# convert the object into a dict
acr_manifest_attributes_dict = acr_manifest_attributes_instance.to_dict()
# create an instance of AcrManifestAttributes from a dict
acr_manifest_attributes_from_dict = AcrManifestAttributes.from_dict(acr_manifest_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


