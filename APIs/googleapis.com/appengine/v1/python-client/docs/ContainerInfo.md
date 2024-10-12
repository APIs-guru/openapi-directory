# ContainerInfo

Docker image that is used to create a container and start a VM instance for the version that you deploy. Only applicable for instances running in the App Engine flexible environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **str** | URI to the hosted container image in Google Container Registry. The URI must be fully qualified and include a tag or digest. Examples: \&quot;gcr.io/my-project/image:tag\&quot; or \&quot;gcr.io/my-project/image@digest\&quot; | [optional] 

## Example

```python
from openapi_client.models.container_info import ContainerInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerInfo from a JSON string
container_info_instance = ContainerInfo.from_json(json)
# print the JSON string representation of the object
print(ContainerInfo.to_json())

# convert the object into a dict
container_info_dict = container_info_instance.to_dict()
# create an instance of ContainerInfo from a dict
container_info_from_dict = ContainerInfo.from_dict(container_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


