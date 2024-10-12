# GoogleCloudSecuritycenterV2BigQueryExport

Configures how to deliver Findings to BigQuery Instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time at which the BigQuery export was created. This field is set by the server and will be ignored if provided on export on creation. | [optional] [readonly] 
**dataset** | **str** | The dataset to write findings&#39; updates to. Its format is \&quot;projects/[project_id]/datasets/[bigquery_dataset_id]\&quot;. BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). | [optional] 
**description** | **str** | The description of the export (max of 1024 characters). | [optional] 
**filter** | **str** | Expression that defines the filter to apply across create/update events of findings. The expression is a list of zero or more restrictions combined via logical operators &#x60;AND&#x60; and &#x60;OR&#x60;. Parentheses are supported, and &#x60;OR&#x60; has higher precedence than &#x60;AND&#x60;. Restrictions have the form &#x60; &#x60; and may have a &#x60;-&#x60; character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * &#x60;&#x3D;&#x60; for all value types. * &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; for integer values. * &#x60;:&#x60;, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals &#x60;true&#x60; and &#x60;false&#x60; without quotes. | [optional] 
**most_recent_editor** | **str** | Output only. Email address of the user who last edited the BigQuery export. This field is set by the server and will be ignored if provided on export creation or update. | [optional] [readonly] 
**name** | **str** | The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. The following list shows some examples: + &#x60;organizations/{organization_id}/locations/{location_id}/bigQueryExports/{export_id}&#x60; + &#x60;folders/{folder_id}/locations/{location_id}/bigQueryExports/{export_id}&#x60; + &#x60;projects/{project_id}/locations/{location_id}/bigQueryExports/{export_id}&#x60; This field is provided in responses, and is ignored when provided in create requests. | [optional] 
**principal** | **str** | Output only. The service account that needs permission to create table and upload data to the BigQuery dataset. | [optional] [readonly] 
**update_time** | **str** | Output only. The most recent time at which the BigQuery export was updated. This field is set by the server and will be ignored if provided on export creation or update. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_big_query_export import GoogleCloudSecuritycenterV2BigQueryExport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2BigQueryExport from a JSON string
google_cloud_securitycenter_v2_big_query_export_instance = GoogleCloudSecuritycenterV2BigQueryExport.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2BigQueryExport.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_big_query_export_dict = google_cloud_securitycenter_v2_big_query_export_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2BigQueryExport from a dict
google_cloud_securitycenter_v2_big_query_export_from_dict = GoogleCloudSecuritycenterV2BigQueryExport.from_dict(google_cloud_securitycenter_v2_big_query_export_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


