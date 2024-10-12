# DockerImage

DockerImage represents a docker artifact. The following fields are returned as untyped metadata in the Version resource, using camelcase keys (i.e. metadata.imageSizeBytes): * imageSizeBytes * mediaType * buildTime

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_time** | **str** | The time this image was built. This field is returned as the &#39;metadata.buildTime&#39; field in the Version resource. The build time is returned to the client as an RFC 3339 string, which can be easily used with the JavaScript Date constructor. | [optional] 
**image_size_bytes** | **str** | Calculated size of the image. This field is returned as the &#39;metadata.imageSizeBytes&#39; field in the Version resource. | [optional] 
**media_type** | **str** | Media type of this image, e.g. \&quot;application/vnd.docker.distribution.manifest.v2+json\&quot;. This field is returned as the &#39;metadata.mediaType&#39; field in the Version resource. | [optional] 
**name** | **str** | Required. registry_location, project_id, repository_name and image id forms a unique image name:&#x60;projects//locations//repository//dockerImages/&#x60;. For example, \&quot;projects/test-project/locations/us-west4/repositories/test-repo/dockerImages/ nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf\&quot;, where \&quot;us-west4\&quot; is the registry_location, \&quot;test-project\&quot; is the project_id, \&quot;test-repo\&quot; is the repository_name and \&quot;nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf\&quot; is the image&#39;s digest. | [optional] 
**tags** | **List[str]** | Tags attached to this image. | [optional] 
**update_time** | **str** | Output only. The time when the docker image was last updated. | [optional] [readonly] 
**upload_time** | **str** | Time the image was uploaded. | [optional] 
**uri** | **str** | Required. URL to access the image. Example: us-west4-docker.pkg.dev/test-project/test-repo/nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf | [optional] 

## Example

```python
from openapi_client.models.docker_image import DockerImage

# TODO update the JSON string below
json = "{}"
# create an instance of DockerImage from a JSON string
docker_image_instance = DockerImage.from_json(json)
# print the JSON string representation of the object
print(DockerImage.to_json())

# convert the object into a dict
docker_image_dict = docker_image_instance.to_dict()
# create an instance of DockerImage from a dict
docker_image_from_dict = DockerImage.from_dict(docker_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


