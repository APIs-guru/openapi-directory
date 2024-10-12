# ResourceOptions

ResourceOptions represent options for Kubernetes resource generation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connect_version** | **str** | Optional. The Connect agent version to use for connect_resources. Defaults to the latest GKE Connect version. The version must be a currently supported version, obsolete versions will be rejected. | [optional] 
**k8s_version** | **str** | Optional. Major version of the Kubernetes cluster. This is only used to determine which version to use for the CustomResourceDefinition resources, &#x60;apiextensions/v1beta1&#x60; or&#x60;apiextensions/v1&#x60;. | [optional] 
**v1beta1_crd** | **bool** | Optional. Use &#x60;apiextensions/v1beta1&#x60; instead of &#x60;apiextensions/v1&#x60; for CustomResourceDefinition resources. This option should be set for clusters with Kubernetes apiserver versions &lt;1.16. | [optional] 

## Example

```python
from openapi_client.models.resource_options import ResourceOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceOptions from a JSON string
resource_options_instance = ResourceOptions.from_json(json)
# print the JSON string representation of the object
print(ResourceOptions.to_json())

# convert the object into a dict
resource_options_dict = resource_options_instance.to_dict()
# create an instance of ResourceOptions from a dict
resource_options_from_dict = ResourceOptions.from_dict(resource_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


