# DocumentDbOutputDataSourceProperties

The properties that are associated with a DocumentDB output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The DocumentDB account name or ID. Required on PUT (CreateOrReplace) requests. | [optional] 
**account_key** | **str** | The account key for the DocumentDB account. Required on PUT (CreateOrReplace) requests. | [optional] 
**collection_name_pattern** | **str** | The collection name pattern for the collections to be used. The collection name format can be constructed using the optional {partition} token, where partitions start from 0. See the DocumentDB section of https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for more information. Required on PUT (CreateOrReplace) requests. | [optional] 
**database** | **str** | The name of the DocumentDB database. Required on PUT (CreateOrReplace) requests. | [optional] 
**document_id** | **str** | The name of the field in output events used to specify the primary key which insert or update operations are based on. | [optional] 
**partition_key** | **str** | The name of the field in output events used to specify the key for partitioning output across collections. If &#39;collectionNamePattern&#39; contains the {partition} token, this property is required to be specified. | [optional] 

## Example

```python
from openapi_client.models.document_db_output_data_source_properties import DocumentDbOutputDataSourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentDbOutputDataSourceProperties from a JSON string
document_db_output_data_source_properties_instance = DocumentDbOutputDataSourceProperties.from_json(json)
# print the JSON string representation of the object
print(DocumentDbOutputDataSourceProperties.to_json())

# convert the object into a dict
document_db_output_data_source_properties_dict = document_db_output_data_source_properties_instance.to_dict()
# create an instance of DocumentDbOutputDataSourceProperties from a dict
document_db_output_data_source_properties_from_dict = DocumentDbOutputDataSourceProperties.from_dict(document_db_output_data_source_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


