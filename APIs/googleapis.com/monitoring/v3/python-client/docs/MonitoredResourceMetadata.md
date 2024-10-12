# MonitoredResourceMetadata

Auxiliary metadata for a MonitoredResource object. MonitoredResource objects contain the minimum set of information to uniquely identify a monitored resource instance. There is some other useful auxiliary metadata. Monitoring and Logging use an ingestion pipeline to extract metadata for cloud resources of all types, and store the metadata in this message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system_labels** | **Dict[str, object]** | Output only. Values for predefined system metadata labels. System labels are a kind of metadata extracted by Google, including \&quot;machine_image\&quot;, \&quot;vpc\&quot;, \&quot;subnet_id\&quot;, \&quot;security_group\&quot;, \&quot;name\&quot;, etc. System label values can be only strings, Boolean values, or a list of strings. For example: { \&quot;name\&quot;: \&quot;my-test-instance\&quot;, \&quot;security_group\&quot;: [\&quot;a\&quot;, \&quot;b\&quot;, \&quot;c\&quot;], \&quot;spot_instance\&quot;: false }  | [optional] 
**user_labels** | **Dict[str, str]** | Output only. A map of user-defined metadata labels. | [optional] 

## Example

```python
from openapi_client.models.monitored_resource_metadata import MonitoredResourceMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of MonitoredResourceMetadata from a JSON string
monitored_resource_metadata_instance = MonitoredResourceMetadata.from_json(json)
# print the JSON string representation of the object
print(MonitoredResourceMetadata.to_json())

# convert the object into a dict
monitored_resource_metadata_dict = monitored_resource_metadata_instance.to_dict()
# create an instance of MonitoredResourceMetadata from a dict
monitored_resource_metadata_from_dict = MonitoredResourceMetadata.from_dict(monitored_resource_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


