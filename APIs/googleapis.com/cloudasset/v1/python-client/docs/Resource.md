# Resource

A representation of a Google Cloud resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **Dict[str, object]** | The content of the resource, in which some sensitive fields are removed and may not be present. | [optional] 
**discovery_document_uri** | **str** | The URL of the discovery document containing the resource&#39;s JSON schema. Example: &#x60;https://www.googleapis.com/discovery/v1/apis/compute/v1/rest&#x60; This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. | [optional] 
**discovery_name** | **str** | The JSON schema name listed in the discovery document. Example: &#x60;Project&#x60; This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. | [optional] 
**location** | **str** | The location of the resource in Google Cloud, such as its zone and region. For more information, see https://cloud.google.com/about/locations/. | [optional] 
**parent** | **str** | The full name of the immediate parent of this resource. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. For Google Cloud assets, this value is the parent resource defined in the [IAM policy hierarchy](https://cloud.google.com/iam/docs/overview#policy_hierarchy). Example: &#x60;//cloudresourcemanager.googleapis.com/projects/my_project_123&#x60; | [optional] 
**resource_url** | **str** | The REST URL for accessing the resource. An HTTP &#x60;GET&#x60; request using this URL returns the resource itself. Example: &#x60;https://cloudresourcemanager.googleapis.com/v1/projects/my-project-123&#x60; This value is unspecified for resources without a REST API. | [optional] 
**version** | **str** | The API version. Example: &#x60;v1&#x60; | [optional] 

## Example

```python
from openapi_client.models.resource import Resource

# TODO update the JSON string below
json = "{}"
# create an instance of Resource from a JSON string
resource_instance = Resource.from_json(json)
# print the JSON string representation of the object
print(Resource.to_json())

# convert the object into a dict
resource_dict = resource_instance.to_dict()
# create an instance of Resource from a dict
resource_from_dict = Resource.from_dict(resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


