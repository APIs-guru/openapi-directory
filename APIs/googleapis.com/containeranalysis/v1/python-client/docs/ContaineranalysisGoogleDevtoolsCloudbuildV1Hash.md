# ContaineranalysisGoogleDevtoolsCloudbuildV1Hash

Container message for hash values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of hash that was performed. | [optional] 
**value** | **bytearray** | The hash value. | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_hash import ContaineranalysisGoogleDevtoolsCloudbuildV1Hash

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1Hash from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_hash_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1Hash.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1Hash.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_hash_dict = containeranalysis_google_devtools_cloudbuild_v1_hash_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1Hash from a dict
containeranalysis_google_devtools_cloudbuild_v1_hash_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1Hash.from_dict(containeranalysis_google_devtools_cloudbuild_v1_hash_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


