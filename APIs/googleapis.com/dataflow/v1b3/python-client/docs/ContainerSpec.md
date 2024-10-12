# ContainerSpec

Container Spec.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_environment** | [**FlexTemplateRuntimeEnvironment**](FlexTemplateRuntimeEnvironment.md) |  | [optional] 
**image** | **str** | Name of the docker container image. E.g., gcr.io/project/some-image | [optional] 
**image_repository_cert_path** | **str** | Cloud Storage path to self-signed certificate of private registry. | [optional] 
**image_repository_password_secret_id** | **str** | Secret Manager secret id for password to authenticate to private registry. | [optional] 
**image_repository_username_secret_id** | **str** | Secret Manager secret id for username to authenticate to private registry. | [optional] 
**metadata** | [**TemplateMetadata**](TemplateMetadata.md) |  | [optional] 
**sdk_info** | [**SDKInfo**](SDKInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.container_spec import ContainerSpec

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerSpec from a JSON string
container_spec_instance = ContainerSpec.from_json(json)
# print the JSON string representation of the object
print(ContainerSpec.to_json())

# convert the object into a dict
container_spec_dict = container_spec_instance.to_dict()
# create an instance of ContainerSpec from a dict
container_spec_from_dict = ContainerSpec.from_dict(container_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


