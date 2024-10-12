# MonitoredResourceDescriptor

An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of \"gce_instance\" and specifies the use of the labels \"instance_id\" and \"zone\" to identify particular VM instances.Different APIs can support different monitored resource types. APIs generally provide a list method that returns the monitored resource descriptors used by the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. A detailed description of the monitored resource type that might be used in documentation. | [optional] 
**display_name** | **str** | Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, \&quot;Google Cloud SQL Database\&quot;. | [optional] 
**labels** | [**List[LabelDescriptor]**](LabelDescriptor.md) | Required. A set of labels used to describe instances of this monitored resource type. For example, an individual Google Cloud SQL database is identified by values for the labels \&quot;database_id\&quot; and \&quot;zone\&quot;. | [optional] 
**launch_stage** | **str** | Optional. The launch stage of the monitored resource definition. | [optional] 
**name** | **str** | Optional. The resource name of the monitored resource descriptor: \&quot;projects/{project_id}/monitoredResourceDescriptors/{type}\&quot; where {type} is the value of the type field in this object and {project_id} is a project ID that provides API-specific context for accessing the type. APIs that do not use project information can use the resource name format \&quot;monitoredResourceDescriptors/{type}\&quot;. | [optional] 
**type** | **str** | Required. The monitored resource type. For example, the type \&quot;cloudsql_database\&quot; represents databases in Google Cloud SQL. For a list of types, see Monitored resource types (https://cloud.google.com/monitoring/api/resources) and Logging resource types (https://cloud.google.com/logging/docs/api/v2/resource-list). | [optional] 

## Example

```python
from openapi_client.models.monitored_resource_descriptor import MonitoredResourceDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of MonitoredResourceDescriptor from a JSON string
monitored_resource_descriptor_instance = MonitoredResourceDescriptor.from_json(json)
# print the JSON string representation of the object
print(MonitoredResourceDescriptor.to_json())

# convert the object into a dict
monitored_resource_descriptor_dict = monitored_resource_descriptor_instance.to_dict()
# create an instance of MonitoredResourceDescriptor from a dict
monitored_resource_descriptor_from_dict = MonitoredResourceDescriptor.from_dict(monitored_resource_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


