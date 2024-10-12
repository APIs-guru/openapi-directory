# JobMetadata

Metadata available primarily for filtering jobs. Will be included in the ListJob response and Job SUMMARY view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**big_table_details** | [**List[BigTableIODetails]**](BigTableIODetails.md) | Identification of a Cloud Bigtable source used in the Dataflow job. | [optional] 
**bigquery_details** | [**List[BigQueryIODetails]**](BigQueryIODetails.md) | Identification of a BigQuery source used in the Dataflow job. | [optional] 
**datastore_details** | [**List[DatastoreIODetails]**](DatastoreIODetails.md) | Identification of a Datastore source used in the Dataflow job. | [optional] 
**file_details** | [**List[FileIODetails]**](FileIODetails.md) | Identification of a File source used in the Dataflow job. | [optional] 
**pubsub_details** | [**List[PubSubIODetails]**](PubSubIODetails.md) | Identification of a Pub/Sub source used in the Dataflow job. | [optional] 
**sdk_version** | [**SdkVersion**](SdkVersion.md) |  | [optional] 
**spanner_details** | [**List[SpannerIODetails]**](SpannerIODetails.md) | Identification of a Spanner source used in the Dataflow job. | [optional] 
**user_display_properties** | **Dict[str, str]** | List of display properties to help UI filter jobs. | [optional] 

## Example

```python
from openapi_client.models.job_metadata import JobMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of JobMetadata from a JSON string
job_metadata_instance = JobMetadata.from_json(json)
# print the JSON string representation of the object
print(JobMetadata.to_json())

# convert the object into a dict
job_metadata_dict = job_metadata_instance.to_dict()
# create an instance of JobMetadata from a dict
job_metadata_from_dict = JobMetadata.from_dict(job_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


