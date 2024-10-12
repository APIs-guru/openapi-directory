# QueryMetadataRequest

Request message for DataprocMetastore.QueryMetadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **str** | Required. A read-only SQL query to execute against the metadata database. The query cannot change or mutate the data. | [optional] 

## Example

```python
from openapi_client.models.query_metadata_request import QueryMetadataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryMetadataRequest from a JSON string
query_metadata_request_instance = QueryMetadataRequest.from_json(json)
# print the JSON string representation of the object
print(QueryMetadataRequest.to_json())

# convert the object into a dict
query_metadata_request_dict = query_metadata_request_instance.to_dict()
# create an instance of QueryMetadataRequest from a dict
query_metadata_request_from_dict = QueryMetadataRequest.from_dict(query_metadata_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


