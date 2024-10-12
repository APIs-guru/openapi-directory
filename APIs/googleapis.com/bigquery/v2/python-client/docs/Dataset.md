# Dataset


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | [**List[DatasetAccessInner]**](DatasetAccessInner.md) | Optional. An array of objects that define dataset access for one or more entities. You can set this property when inserting or updating a dataset in order to control who is allowed to access the data. If unspecified at dataset creation time, BigQuery adds default dataset access for the following entities: access.specialGroup: projectReaders; access.role: READER; access.specialGroup: projectWriters; access.role: WRITER; access.specialGroup: projectOwners; access.role: OWNER; access.userByEmail: [dataset creator email]; access.role: OWNER; | [optional] 
**creation_time** | **str** | Output only. The time when this dataset was created, in milliseconds since the epoch. | [optional] [readonly] 
**dataset_reference** | [**DatasetReference**](DatasetReference.md) |  | [optional] 
**default_collation** | **str** | Optional. Defines the default collation specification of future tables created in the dataset. If a table is created in this dataset without table-level default collation, then the table inherits the dataset default collation, which is applied to the string fields that do not have explicit collation specified. A change to this field affects only tables created afterwards, and does not alter the existing tables. The following values are supported: * &#39;und:ci&#39;: undetermined locale, case insensitive. * &#39;&#39;: empty string. Default to case-sensitive behavior. | [optional] 
**default_encryption_configuration** | [**EncryptionConfiguration**](EncryptionConfiguration.md) |  | [optional] 
**default_partition_expiration_ms** | **str** | This default partition expiration, expressed in milliseconds. When new time-partitioned tables are created in a dataset where this property is set, the table will inherit this value, propagated as the &#x60;TimePartitioning.expirationMs&#x60; property on the new table. If you set &#x60;TimePartitioning.expirationMs&#x60; explicitly when creating a table, the &#x60;defaultPartitionExpirationMs&#x60; of the containing dataset is ignored. When creating a partitioned table, if &#x60;defaultPartitionExpirationMs&#x60; is set, the &#x60;defaultTableExpirationMs&#x60; value is ignored and the table will not be inherit a table expiration deadline. | [optional] 
**default_rounding_mode** | **str** | Optional. Defines the default rounding mode specification of new tables created within this dataset. During table creation, if this field is specified, the table within this dataset will inherit the default rounding mode of the dataset. Setting the default rounding mode on a table overrides this option. Existing tables in the dataset are unaffected. If columns are defined during that table creation, they will immediately inherit the table&#39;s default rounding mode, unless otherwise specified. | [optional] 
**default_table_expiration_ms** | **str** | Optional. The default lifetime of all tables in the dataset, in milliseconds. The minimum lifetime value is 3600000 milliseconds (one hour). To clear an existing default expiration with a PATCH request, set to 0. Once this property is set, all newly-created tables in the dataset will have an expirationTime property set to the creation time plus the value in this property, and changing the value will only affect new tables, not existing ones. When the expirationTime for a given table is reached, that table will be deleted automatically. If a table&#39;s expirationTime is modified or removed before the table expires, or if you provide an explicit expirationTime when creating a table, that value takes precedence over the default expiration time indicated by this property. | [optional] 
**description** | **str** | Optional. A user-friendly description of the dataset. | [optional] 
**etag** | **str** | Output only. A hash of the resource. | [optional] [readonly] 
**external_dataset_reference** | [**ExternalDatasetReference**](ExternalDatasetReference.md) |  | [optional] 
**friendly_name** | **str** | Optional. A descriptive name for the dataset. | [optional] 
**id** | **str** | Output only. The fully-qualified unique name of the dataset in the format projectId:datasetId. The dataset name without the project name is given in the datasetId field. When creating a new dataset, leave this field blank, and instead specify the datasetId field. | [optional] [readonly] 
**is_case_insensitive** | **bool** | Optional. TRUE if the dataset and its table names are case-insensitive, otherwise FALSE. By default, this is FALSE, which means the dataset and its table names are case-sensitive. This field does not affect routine references. | [optional] 
**kind** | **str** | Output only. The resource type. | [optional] [readonly] [default to 'bigquery#dataset']
**labels** | **Dict[str, str]** | The labels associated with this dataset. You can use these to organize and group your datasets. You can set this property when inserting or updating a dataset. See Creating and Updating Dataset Labels for more information. | [optional] 
**last_modified_time** | **str** | Output only. The date when this dataset was last modified, in milliseconds since the epoch. | [optional] [readonly] 
**linked_dataset_source** | [**LinkedDatasetSource**](LinkedDatasetSource.md) |  | [optional] 
**location** | **str** | The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations. | [optional] 
**max_time_travel_hours** | **str** | Optional. Defines the time travel window in hours. The value can be from 48 to 168 hours (2 to 7 days). The default value is 168 hours if this is not set. | [optional] 
**satisfies_pzi** | **bool** | Output only. Reserved for future use. | [optional] [readonly] 
**satisfies_pzs** | **bool** | Output only. Reserved for future use. | [optional] [readonly] 
**self_link** | **str** | Output only. A URL that can be used to access the resource again. You can use this URL in Get or Update requests to the resource. | [optional] [readonly] 
**storage_billing_model** | **str** | Optional. Updates storage_billing_model for the dataset. | [optional] 
**tags** | [**List[DatasetTagsInner]**](DatasetTagsInner.md) | Output only. Tags for the Dataset. | [optional] [readonly] 
**type** | **str** | Output only. Same as &#x60;type&#x60; in &#x60;ListFormatDataset&#x60;. The type of the dataset, one of: * DEFAULT - only accessible by owner and authorized accounts, * PUBLIC - accessible by everyone, * LINKED - linked dataset, * EXTERNAL - dataset with definition in external metadata catalog. -- *BIGLAKE_METASTORE - dataset that references a database created in BigLakeMetastore service. -- | [optional] [readonly] 

## Example

```python
from openapi_client.models.dataset import Dataset

# TODO update the JSON string below
json = "{}"
# create an instance of Dataset from a JSON string
dataset_instance = Dataset.from_json(json)
# print the JSON string representation of the object
print(Dataset.to_json())

# convert the object into a dict
dataset_dict = dataset_instance.to_dict()
# create an instance of Dataset from a dict
dataset_from_dict = Dataset.from_dict(dataset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


