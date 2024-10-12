# MonitoredResource

An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for \"gce_instance\" has labels \"project_id\", \"instance_id\" and \"zone\": { \"type\": \"gce_instance\", \"labels\": { \"project_id\": \"my-project\", \"instance_id\": \"12345678901234\", \"zone\": \"us-central1-a\" }} 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **Dict[str, str]** | Required. Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels \&quot;project_id\&quot;, \&quot;instance_id\&quot;, and \&quot;zone\&quot;. | [optional] 
**type** | **str** | Required. The monitored resource type. This field must match the type field of a MonitoredResourceDescriptor object. For example, the type of a Compute Engine VM instance is gce_instance. For a list of types, see Monitoring resource types (https://cloud.google.com/monitoring/api/resources) and Logging resource types (https://cloud.google.com/logging/docs/api/v2/resource-list). | [optional] 

## Example

```python
from openapi_client.models.monitored_resource import MonitoredResource

# TODO update the JSON string below
json = "{}"
# create an instance of MonitoredResource from a JSON string
monitored_resource_instance = MonitoredResource.from_json(json)
# print the JSON string representation of the object
print(MonitoredResource.to_json())

# convert the object into a dict
monitored_resource_dict = monitored_resource_instance.to_dict()
# create an instance of MonitoredResource from a dict
monitored_resource_from_dict = MonitoredResource.from_dict(monitored_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


