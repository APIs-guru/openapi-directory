# QueryRequest

Request type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_user_id** | **str** | Required. Third-party user ID. | [optional] 
**inputs** | [**List[QueryRequestInput]**](QueryRequestInput.md) | Required. Inputs containing third-party device IDs for which to get the device states. | [optional] 
**request_id** | **str** | Request ID used for debugging. | [optional] 

## Example

```python
from openapi_client.models.query_request import QueryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryRequest from a JSON string
query_request_instance = QueryRequest.from_json(json)
# print the JSON string representation of the object
print(QueryRequest.to_json())

# convert the object into a dict
query_request_dict = query_request_instance.to_dict()
# create an instance of QueryRequest from a dict
query_request_from_dict = QueryRequest.from_dict(query_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


