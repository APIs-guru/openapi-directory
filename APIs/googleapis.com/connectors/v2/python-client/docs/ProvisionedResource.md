# ProvisionedResource

Describes provisioned dataplane resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_type** | **str** | Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider&#39;s VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with &#39;compute-&#39;, for example: &#39;compute-instance&#39;, &#39;compute-disk&#39;, &#39;compute-autoscaler&#39;. | [optional] 
**resource_url** | **str** | URL identifying the resource, e.g. \&quot;https://www.googleapis.com/compute/v1/projects/...)\&quot;. | [optional] 

## Example

```python
from openapi_client.models.provisioned_resource import ProvisionedResource

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisionedResource from a JSON string
provisioned_resource_instance = ProvisionedResource.from_json(json)
# print the JSON string representation of the object
print(ProvisionedResource.to_json())

# convert the object into a dict
provisioned_resource_dict = provisioned_resource_instance.to_dict()
# create an instance of ProvisionedResource from a dict
provisioned_resource_from_dict = ProvisionedResource.from_dict(provisioned_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


