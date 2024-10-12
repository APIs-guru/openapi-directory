# LogSink

Describes a sink used to export log entries to one of the following destinations: a Cloud Logging log bucket, a Cloud Storage bucket, a BigQuery dataset, a Pub/Sub topic, a Cloud project.A logs filter controls which log entries are exported. The sink must be created within a project, organization, billing account, or folder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_options** | [**BigQueryOptions**](BigQueryOptions.md) |  | [optional] 
**create_time** | **str** | Output only. The creation timestamp of the sink.This field may not be present for older sinks. | [optional] [readonly] 
**description** | **str** | Optional. A description of this sink.The maximum length of the description is 8000 characters. | [optional] 
**destination** | **str** | Required. The export destination: \&quot;storage.googleapis.com/[GCS_BUCKET]\&quot; \&quot;bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]\&quot; \&quot;pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]\&quot; \&quot;logging.googleapis.com/projects/[PROJECT_ID]\&quot; \&quot;logging.googleapis.com/projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]\&quot; The sink&#39;s writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported. For more information, see Exporting Logs with Sinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs). | [optional] 
**disabled** | **bool** | Optional. If set to true, then this sink is disabled and it does not export any log entries. | [optional] 
**exclusions** | [**List[LogExclusion]**](LogExclusion.md) | Optional. Log entries that match any of these exclusion filters will not be exported.If a log entry is matched by both filter and one of exclusion_filters it will not be exported. | [optional] 
**filter** | **str** | Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter.For example:logName&#x3D;\&quot;projects/[PROJECT_ID]/logs/[LOG_ID]\&quot; AND severity&gt;&#x3D;ERROR | [optional] 
**include_children** | **bool** | Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink&#39;s parent resource are available for export. If the field is true, then log entries from all the projects, folders, and billing accounts contained in the sink&#39;s parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink&#39;s filter expression.For example, if this field is true, then the filter resource.type&#x3D;gce_instance would export all Compute Engine VM instance log entries from all projects in the sink&#39;s parent.To only export entries from certain child projects, filter on the project part of the log name:logName:(\&quot;projects/test-project1/\&quot; OR \&quot;projects/test-project2/\&quot;) AND resource.type&#x3D;gce_instance | [optional] 
**name** | **str** | Output only. The client-assigned sink identifier, unique within the project.For example: \&quot;my-syslog-errors-to-pubsub\&quot;.Sink identifiers are limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, periods.First character has to be alphanumeric. | [optional] [readonly] 
**output_version_format** | **str** | Deprecated. This field is unused. | [optional] 
**update_time** | **str** | Output only. The last update timestamp of the sink.This field may not be present for older sinks. | [optional] [readonly] 
**writer_identity** | **str** | Output only. An IAM identity—a service account or group—under which Cloud Logging writes the exported log entries to the sink&#39;s destination. This field is either set by specifying custom_writer_identity or set automatically by sinks.create and sinks.update based on the value of unique_writer_identity in those methods.Until you grant this identity write-access to the destination, log entry exports from this sink will fail. For more information, see Granting Access for a Resource (https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource). Consult the destination service&#39;s documentation to determine the appropriate IAM roles to assign to the identity.Sinks that have a destination that is a log bucket in the same project as the sink cannot have a writer_identity and no additional permissions are required. | [optional] [readonly] 

## Example

```python
from openapi_client.models.log_sink import LogSink

# TODO update the JSON string below
json = "{}"
# create an instance of LogSink from a JSON string
log_sink_instance = LogSink.from_json(json)
# print the JSON string representation of the object
print(LogSink.to_json())

# convert the object into a dict
log_sink_dict = log_sink_instance.to_dict()
# create an instance of LogSink from a dict
log_sink_from_dict = LogSink.from_dict(log_sink_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


