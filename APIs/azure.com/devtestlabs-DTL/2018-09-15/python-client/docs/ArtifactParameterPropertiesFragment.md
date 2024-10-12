# ArtifactParameterPropertiesFragment

Properties of an artifact parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the artifact parameter. | [optional] 
**value** | **str** | The value of the artifact parameter. | [optional] 

## Example

```python
from openapi_client.models.artifact_parameter_properties_fragment import ArtifactParameterPropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactParameterPropertiesFragment from a JSON string
artifact_parameter_properties_fragment_instance = ArtifactParameterPropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(ArtifactParameterPropertiesFragment.to_json())

# convert the object into a dict
artifact_parameter_properties_fragment_dict = artifact_parameter_properties_fragment_instance.to_dict()
# create an instance of ArtifactParameterPropertiesFragment from a dict
artifact_parameter_properties_fragment_from_dict = ArtifactParameterPropertiesFragment.from_dict(artifact_parameter_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


