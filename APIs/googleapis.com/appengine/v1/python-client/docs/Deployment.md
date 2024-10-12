# Deployment

Code and application artifacts used to deploy a version to App Engine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_build_options** | [**CloudBuildOptions**](CloudBuildOptions.md) |  | [optional] 
**container** | [**ContainerInfo**](ContainerInfo.md) |  | [optional] 
**files** | [**Dict[str, FileInfo]**](FileInfo.md) | Manifest of the files stored in Google Cloud Storage that are included as part of this version. All files must be readable using the credentials supplied with this call. | [optional] 
**zip** | [**ZipInfo**](ZipInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.deployment import Deployment

# TODO update the JSON string below
json = "{}"
# create an instance of Deployment from a JSON string
deployment_instance = Deployment.from_json(json)
# print the JSON string representation of the object
print(Deployment.to_json())

# convert the object into a dict
deployment_dict = deployment_instance.to_dict()
# create an instance of Deployment from a dict
deployment_from_dict = Deployment.from_dict(deployment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


