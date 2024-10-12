# QueryMetadataResponse

Response message for DataprocMetastore.QueryMetadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result_manifest_uri** | **str** | The manifest URI is link to a JSON instance in Cloud Storage. This instance manifests immediately along with QueryMetadataResponse. The content of the URI is not retriable until the long-running operation query against the metadata finishes. | [optional] 

## Example

```python
from openapi_client.models.query_metadata_response import QueryMetadataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryMetadataResponse from a JSON string
query_metadata_response_instance = QueryMetadataResponse.from_json(json)
# print the JSON string representation of the object
print(QueryMetadataResponse.to_json())

# convert the object into a dict
query_metadata_response_dict = query_metadata_response_instance.to_dict()
# create an instance of QueryMetadataResponse from a dict
query_metadata_response_from_dict = QueryMetadataResponse.from_dict(query_metadata_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


