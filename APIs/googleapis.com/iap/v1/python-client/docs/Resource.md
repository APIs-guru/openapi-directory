# Resource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expected_next_state** | **Dict[str, object]** | The proto or JSON formatted expected next state of the resource, wrapped in a google.protobuf.Any proto, against which the policy rules are evaluated. Services not integrated with custom org policy can omit this field. Services integrated with custom org policy must populate this field for all requests where the API call changes the state of the resource. Custom org policy backend uses these attributes to enforce custom org policies. When a proto is wrapped, it is generally the One Platform API proto. When a JSON string is wrapped, use &#x60;google.protobuf.StringValue&#x60; for the inner value. For create operations, GCP service is expected to pass resource from customer request as is. For update/patch operations, GCP service is expected to compute the next state with the patch provided by the user. See go/custom-constraints-org-policy-integration-guide for additional details. | [optional] 
**labels** | **Dict[str, str]** | The service defined labels of the resource on which the conditions will be evaluated. The semantics - including the key names - are vague to IAM. If the effective condition has a reference to a &#x60;resource.labels[foo]&#x60; construct, IAM consults with this map to retrieve the values associated with &#x60;foo&#x60; key for Conditions evaluation. If the provided key is not found in the labels map, the condition would evaluate to false. This field is in limited use. If your intended use case is not expected to express resource.labels attribute in IAM Conditions, leave this field empty. Before planning on using this attribute please: * Read go/iam-conditions-labels-comm and ensure your service can meet the data availability and management requirements. * Talk to iam-conditions-eng@ about your use case. | [optional] 
**name** | **str** | Name of the resource on which conditions will be evaluated. Must use the Relative Resource Name of the resource, which is the URI path of the resource without the leading \&quot;/\&quot;. Examples are \&quot;projects/_/buckets/[BUCKET-ID]\&quot; for storage buckets or \&quot;projects/[PROJECT-ID]/global/firewalls/[FIREWALL-ID]\&quot; for a firewall. This field is required for evaluating conditions with rules on resource names. For a &#x60;list&#x60; permission check, the resource.name value must be set to the parent resource. If the parent resource is a project, this field should be left unset. | [optional] 
**service** | **str** | The name of the service this resource belongs to. It is configured using the official_service_name of the Service as defined in service configurations under //configs/cloud/resourcetypes. For example, the official_service_name of cloud resource manager service is set as &#39;cloudresourcemanager.googleapis.com&#39; according to //configs/cloud/resourcetypes/google/cloud/resourcemanager/prod.yaml | [optional] 
**type** | **str** | The public resource type name of the resource on which conditions will be evaluated. It is configured using the official_name of the ResourceType as defined in service configurations under //configs/cloud/resourcetypes. For example, the official_name for GCP projects is set as &#39;cloudresourcemanager.googleapis.com/Project&#39; according to //configs/cloud/resourcetypes/google/cloud/resourcemanager/prod.yaml For details see go/iam-conditions-integration-guide. | [optional] 

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


