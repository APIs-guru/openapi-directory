# BigQueryConfig

Configuration for a BigQuery subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drop_unknown_fields** | **bool** | Optional. When true and use_topic_schema is true, any fields that are a part of the topic schema that are not part of the BigQuery table schema are dropped when writing to BigQuery. Otherwise, the schemas must be kept in sync and any messages with extra fields are not written and remain in the subscription&#39;s backlog. | [optional] 
**service_account_email** | **str** | Optional. The service account to use to write to BigQuery. The subscription creator or updater that specifies this field must have &#x60;iam.serviceAccounts.actAs&#x60; permission on the service account. If not specified, the Pub/Sub [service agent](https://cloud.google.com/iam/docs/service-agents), service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used. | [optional] 
**state** | **str** | Output only. An output-only field that indicates whether or not the subscription can receive messages. | [optional] [readonly] 
**table** | **str** | Optional. The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId} | [optional] 
**use_table_schema** | **bool** | Optional. When true, use the BigQuery table&#39;s schema as the columns to write to in BigQuery. &#x60;use_table_schema&#x60; and &#x60;use_topic_schema&#x60; cannot be enabled at the same time. | [optional] 
**use_topic_schema** | **bool** | Optional. When true, use the topic&#39;s schema as the columns to write to in BigQuery, if it exists. &#x60;use_topic_schema&#x60; and &#x60;use_table_schema&#x60; cannot be enabled at the same time. | [optional] 
**write_metadata** | **bool** | Optional. When true, write the subscription name, message_id, publish_time, attributes, and ordering_key to additional columns in the table. The subscription name, message_id, and publish_time fields are put in their own columns while all other message properties (other than data) are written to a JSON object in the attributes column. | [optional] 

## Example

```python
from openapi_client.models.big_query_config import BigQueryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BigQueryConfig from a JSON string
big_query_config_instance = BigQueryConfig.from_json(json)
# print the JSON string representation of the object
print(BigQueryConfig.to_json())

# convert the object into a dict
big_query_config_dict = big_query_config_instance.to_dict()
# create an instance of BigQueryConfig from a dict
big_query_config_from_dict = BigQueryConfig.from_dict(big_query_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


