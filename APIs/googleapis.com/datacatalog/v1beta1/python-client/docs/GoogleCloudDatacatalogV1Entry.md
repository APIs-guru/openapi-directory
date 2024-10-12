# GoogleCloudDatacatalogV1Entry

Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the `linked_resource` field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_date_sharded_spec** | [**GoogleCloudDatacatalogV1BigQueryDateShardedSpec**](GoogleCloudDatacatalogV1BigQueryDateShardedSpec.md) |  | [optional] 
**bigquery_table_spec** | [**GoogleCloudDatacatalogV1BigQueryTableSpec**](GoogleCloudDatacatalogV1BigQueryTableSpec.md) |  | [optional] 
**business_context** | [**GoogleCloudDatacatalogV1BusinessContext**](GoogleCloudDatacatalogV1BusinessContext.md) |  | [optional] 
**cloud_bigtable_system_spec** | [**GoogleCloudDatacatalogV1CloudBigtableSystemSpec**](GoogleCloudDatacatalogV1CloudBigtableSystemSpec.md) |  | [optional] 
**data_source** | [**GoogleCloudDatacatalogV1DataSource**](GoogleCloudDatacatalogV1DataSource.md) |  | [optional] 
**data_source_connection_spec** | [**GoogleCloudDatacatalogV1DataSourceConnectionSpec**](GoogleCloudDatacatalogV1DataSourceConnectionSpec.md) |  | [optional] 
**database_table_spec** | [**GoogleCloudDatacatalogV1DatabaseTableSpec**](GoogleCloudDatacatalogV1DatabaseTableSpec.md) |  | [optional] 
**dataset_spec** | [**GoogleCloudDatacatalogV1DatasetSpec**](GoogleCloudDatacatalogV1DatasetSpec.md) |  | [optional] 
**description** | **str** | Entry description that can consist of several sentences or paragraphs that describe entry contents. The description must not contain Unicode non-characters as well as C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). The maximum size is 2000 bytes when encoded in UTF-8. Default value is an empty string. | [optional] 
**display_name** | **str** | Display name of an entry. The maximum size is 500 bytes when encoded in UTF-8. Default value is an empty string. | [optional] 
**feature_online_store_spec** | [**GoogleCloudDatacatalogV1FeatureOnlineStoreSpec**](GoogleCloudDatacatalogV1FeatureOnlineStoreSpec.md) |  | [optional] 
**fileset_spec** | [**GoogleCloudDatacatalogV1FilesetSpec**](GoogleCloudDatacatalogV1FilesetSpec.md) |  | [optional] 
**fully_qualified_name** | **str** | [Fully Qualified Name (FQN)](https://cloud.google.com//data-catalog/docs/fully-qualified-names) of the resource. Set automatically for entries representing resources from synced systems. Settable only during creation, and read-only later. Can be used for search and lookup of the entries.  | [optional] 
**gcs_fileset_spec** | [**GoogleCloudDatacatalogV1GcsFilesetSpec**](GoogleCloudDatacatalogV1GcsFilesetSpec.md) |  | [optional] 
**integrated_system** | **str** | Output only. Indicates the entry&#39;s source system that Data Catalog integrates with, such as BigQuery, Pub/Sub, or Dataproc Metastore. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Cloud labels attached to the entry. In Data Catalog, you can create and modify labels attached only to custom entries. Synced entries have unmodifiable labels that come from the source system. | [optional] 
**linked_resource** | **str** | The resource this metadata entry refers to. For Google Cloud Platform resources, &#x60;linked_resource&#x60; is the [Full Resource Name] (https://cloud.google.com/apis/design/resource_names#full_resource_name). For example, the &#x60;linked_resource&#x60; for a table resource from BigQuery is: &#x60;//bigquery.googleapis.com/projects/{PROJECT_ID}/datasets/{DATASET_ID}/tables/{TABLE_ID}&#x60; Output only when the entry is one of the types in the &#x60;EntryType&#x60; enum. For entries with a &#x60;user_specified_type&#x60;, this field is optional and defaults to an empty string. The resource string must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), periods (.), colons (:), slashes (/), dashes (-), and hashes (#). The maximum size is 200 bytes when encoded in UTF-8. | [optional] 
**looker_system_spec** | [**GoogleCloudDatacatalogV1LookerSystemSpec**](GoogleCloudDatacatalogV1LookerSystemSpec.md) |  | [optional] 
**model_spec** | [**GoogleCloudDatacatalogV1ModelSpec**](GoogleCloudDatacatalogV1ModelSpec.md) |  | [optional] 
**name** | **str** | Output only. The resource name of an entry in URL format. Note: The entry itself and its child resources might not be stored in the location specified in its name. | [optional] [readonly] 
**personal_details** | [**GoogleCloudDatacatalogV1PersonalDetails**](GoogleCloudDatacatalogV1PersonalDetails.md) |  | [optional] 
**routine_spec** | [**GoogleCloudDatacatalogV1RoutineSpec**](GoogleCloudDatacatalogV1RoutineSpec.md) |  | [optional] 
**var_schema** | [**GoogleCloudDatacatalogV1Schema**](GoogleCloudDatacatalogV1Schema.md) |  | [optional] 
**service_spec** | [**GoogleCloudDatacatalogV1ServiceSpec**](GoogleCloudDatacatalogV1ServiceSpec.md) |  | [optional] 
**source_system_timestamps** | [**GoogleCloudDatacatalogV1SystemTimestamps**](GoogleCloudDatacatalogV1SystemTimestamps.md) |  | [optional] 
**sql_database_system_spec** | [**GoogleCloudDatacatalogV1SqlDatabaseSystemSpec**](GoogleCloudDatacatalogV1SqlDatabaseSystemSpec.md) |  | [optional] 
**type** | **str** | The type of the entry. For details, see [&#x60;EntryType&#x60;](#entrytype). | [optional] 
**usage_signal** | [**GoogleCloudDatacatalogV1UsageSignal**](GoogleCloudDatacatalogV1UsageSignal.md) |  | [optional] 
**user_specified_system** | **str** | Indicates the entry&#39;s source system that Data Catalog doesn&#39;t automatically integrate with. The &#x60;user_specified_system&#x60; string has the following limitations: * Is case insensitive. * Must begin with a letter or underscore. * Can only contain letters, numbers, and underscores. * Must be at least 1 character and at most 64 characters long. | [optional] 
**user_specified_type** | **str** | Custom entry type that doesn&#39;t match any of the values allowed for input and listed in the &#x60;EntryType&#x60; enum. When creating an entry, first check the type values in the enum. If there are no appropriate types for the new entry, provide a custom value, for example, &#x60;my_special_type&#x60;. The &#x60;user_specified_type&#x60; string has the following limitations: * Is case insensitive. * Must begin with a letter or underscore. * Can only contain letters, numbers, and underscores. * Must be at least 1 character and at most 64 characters long. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_entry import GoogleCloudDatacatalogV1Entry

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1Entry from a JSON string
google_cloud_datacatalog_v1_entry_instance = GoogleCloudDatacatalogV1Entry.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1Entry.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_entry_dict = google_cloud_datacatalog_v1_entry_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1Entry from a dict
google_cloud_datacatalog_v1_entry_from_dict = GoogleCloudDatacatalogV1Entry.from_dict(google_cloud_datacatalog_v1_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


