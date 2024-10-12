# TraceSink

Describes a sink used to export traces to a BigQuery dataset. The sink must be created within a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The canonical sink resource name, unique within the project. Must be of the form: projects/[PROJECT_NUMBER]/traceSinks/[SINK_ID]. E.g.: &#x60;\&quot;projects/12345/traceSinks/my-project-trace-sink\&quot;&#x60;. Sink identifiers are limited to 256 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, and periods. | [optional] 
**output_config** | [**OutputConfig**](OutputConfig.md) |  | [optional] 
**writer_identity** | **str** | Output only. A service account name for exporting the data. This field is set by sinks.create and sinks.update. The service account will need to be granted write access to the destination specified in the output configuration, see [Granting access for a resource](/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource). To create tables and to write data, this account needs the &#x60;dataEditor&#x60; role. Read more about roles in the [BigQuery documentation](https://cloud.google.com/bigquery/docs/access-control). E.g.: \&quot;service-00000001@00000002.iam.gserviceaccount.com\&quot; | [optional] [readonly] 

## Example

```python
from openapi_client.models.trace_sink import TraceSink

# TODO update the JSON string below
json = "{}"
# create an instance of TraceSink from a JSON string
trace_sink_instance = TraceSink.from_json(json)
# print the JSON string representation of the object
print(TraceSink.to_json())

# convert the object into a dict
trace_sink_dict = trace_sink_instance.to_dict()
# create an instance of TraceSink from a dict
trace_sink_from_dict = TraceSink.from_dict(trace_sink_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


