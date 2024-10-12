# QueryAccessibleDataResponse

Response for successful QueryAccessibleData operations. This structure is included in the response upon operation completion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_uris** | **List[str]** | List of files, each of which contains a list of data_id(s) that are consented for a specified use in the request. | [optional] 

## Example

```python
from openapi_client.models.query_accessible_data_response import QueryAccessibleDataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryAccessibleDataResponse from a JSON string
query_accessible_data_response_instance = QueryAccessibleDataResponse.from_json(json)
# print the JSON string representation of the object
print(QueryAccessibleDataResponse.to_json())

# convert the object into a dict
query_accessible_data_response_dict = query_accessible_data_response_instance.to_dict()
# create an instance of QueryAccessibleDataResponse from a dict
query_accessible_data_response_from_dict = QueryAccessibleDataResponse.from_dict(query_accessible_data_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


