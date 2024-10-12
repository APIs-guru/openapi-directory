# DocumentDbOutputDataSource

Describes a DocumentDB output data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DocumentDbOutputDataSourceProperties**](DocumentDbOutputDataSourceProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.document_db_output_data_source import DocumentDbOutputDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentDbOutputDataSource from a JSON string
document_db_output_data_source_instance = DocumentDbOutputDataSource.from_json(json)
# print the JSON string representation of the object
print(DocumentDbOutputDataSource.to_json())

# convert the object into a dict
document_db_output_data_source_dict = document_db_output_data_source_instance.to_dict()
# create an instance of DocumentDbOutputDataSource from a dict
document_db_output_data_source_from_dict = DocumentDbOutputDataSource.from_dict(document_db_output_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


