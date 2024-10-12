# ImageSourceRegistry

Information about docker image for the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**PrivateRegistryCredentials**](PrivateRegistryCredentials.md) |  | [optional] 
**image** | **str** | The name of the image in the image repository. | 
**server_url** | **str** | URL for image repository. | [optional] 

## Example

```python
from openapi_client.models.image_source_registry import ImageSourceRegistry

# TODO update the JSON string below
json = "{}"
# create an instance of ImageSourceRegistry from a JSON string
image_source_registry_instance = ImageSourceRegistry.from_json(json)
# print the JSON string representation of the object
print(ImageSourceRegistry.to_json())

# convert the object into a dict
image_source_registry_dict = image_source_registry_instance.to_dict()
# create an instance of ImageSourceRegistry from a dict
image_source_registry_from_dict = ImageSourceRegistry.from_dict(image_source_registry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


