# AcrManifests

Manifest attributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_name** | **str** | Image name | [optional] 
**manifests** | [**List[AcrManifestAttributesBase]**](AcrManifestAttributesBase.md) | List of manifests | [optional] 
**registry** | **str** | Registry name | [optional] 

## Example

```python
from openapi_client.models.acr_manifests import AcrManifests

# TODO update the JSON string below
json = "{}"
# create an instance of AcrManifests from a JSON string
acr_manifests_instance = AcrManifests.from_json(json)
# print the JSON string representation of the object
print(AcrManifests.to_json())

# convert the object into a dict
acr_manifests_dict = acr_manifests_instance.to_dict()
# create an instance of AcrManifests from a dict
acr_manifests_from_dict = AcrManifests.from_dict(acr_manifests_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


