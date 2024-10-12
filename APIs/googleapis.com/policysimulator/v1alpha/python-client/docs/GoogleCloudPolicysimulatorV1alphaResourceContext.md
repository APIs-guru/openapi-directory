# GoogleCloudPolicysimulatorV1alphaResourceContext

ResourceContext provides the context we know about a resource. It is similar in concept to google.cloud.asset.v1.Resource, but focuses on the information specifically used by Simulator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ancestors** | **List[str]** | The ancestry path of the resource in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. If the resource is a project, folder, or organization, the ancestry path starts from the resource itself. Example: &#x60;[\&quot;projects/123456789\&quot;, \&quot;folders/5432\&quot;, \&quot;organizations/1234\&quot;]&#x60; | [optional] 
**asset_type** | **str** | The asset type of the resource as defined by CAIS. Example: &#x60;compute.googleapis.com/Firewall&#x60; See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. | [optional] 
**resource** | **str** | The full name of the resource. Example: &#x60;//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1&#x60; See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policysimulator_v1alpha_resource_context import GoogleCloudPolicysimulatorV1alphaResourceContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicysimulatorV1alphaResourceContext from a JSON string
google_cloud_policysimulator_v1alpha_resource_context_instance = GoogleCloudPolicysimulatorV1alphaResourceContext.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicysimulatorV1alphaResourceContext.to_json())

# convert the object into a dict
google_cloud_policysimulator_v1alpha_resource_context_dict = google_cloud_policysimulator_v1alpha_resource_context_instance.to_dict()
# create an instance of GoogleCloudPolicysimulatorV1alphaResourceContext from a dict
google_cloud_policysimulator_v1alpha_resource_context_from_dict = GoogleCloudPolicysimulatorV1alphaResourceContext.from_dict(google_cloud_policysimulator_v1alpha_resource_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


