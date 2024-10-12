# Deployment

Deployment contains the deployment identification information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **Dict[str, str]** | Labels identify the deployment within the user universe and same target. Validation regex for label names: &#x60;^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$&#x60;. Value for an individual label must be &lt;&#x3D; 512 bytes, the total size of all label names and values must be &lt;&#x3D; 1024 bytes. Label named \&quot;language\&quot; can be used to record the programming language of the profiled deployment. The standard choices for the value include \&quot;java\&quot;, \&quot;go\&quot;, \&quot;python\&quot;, \&quot;ruby\&quot;, \&quot;nodejs\&quot;, \&quot;php\&quot;, \&quot;dotnet\&quot;. For deployments running on Google Cloud Platform, \&quot;zone\&quot; or \&quot;region\&quot; label should be present describing the deployment location. An example of a zone is \&quot;us-central1-a\&quot;, an example of a region is \&quot;us-central1\&quot; or \&quot;us-central\&quot;. | [optional] 
**project_id** | **str** | Project ID is the ID of a cloud project. Validation regex: &#x60;^a-z{4,61}[a-z0-9]$&#x60;. | [optional] 
**target** | **str** | Target is the service name used to group related deployments: * Service name for App Engine Flex / Standard. * Cluster and container name for GKE. * User-specified string for direct Compute Engine profiling (e.g. Java). * Job name for Dataflow. Validation regex: &#x60;^[a-z0-9]([-a-z0-9_.]{0,253}[a-z0-9])?$&#x60;. | [optional] 

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


