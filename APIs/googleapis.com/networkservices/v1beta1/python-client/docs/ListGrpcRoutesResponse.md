# ListGrpcRoutesResponse

Response returned by the ListGrpcRoutes method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**grpc_routes** | [**List[GrpcRoute]**](GrpcRoute.md) | List of GrpcRoute resources. | [optional] 
**next_page_token** | **str** | If there might be more results than those appearing in this response, then &#x60;next_page_token&#x60; is included. To get the next set of results, call this method again using the value of &#x60;next_page_token&#x60; as &#x60;page_token&#x60;. | [optional] 

## Example

```python
from openapi_client.models.list_grpc_routes_response import ListGrpcRoutesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListGrpcRoutesResponse from a JSON string
list_grpc_routes_response_instance = ListGrpcRoutesResponse.from_json(json)
# print the JSON string representation of the object
print(ListGrpcRoutesResponse.to_json())

# convert the object into a dict
list_grpc_routes_response_dict = list_grpc_routes_response_instance.to_dict()
# create an instance of ListGrpcRoutesResponse from a dict
list_grpc_routes_response_from_dict = ListGrpcRoutesResponse.from_dict(list_grpc_routes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


