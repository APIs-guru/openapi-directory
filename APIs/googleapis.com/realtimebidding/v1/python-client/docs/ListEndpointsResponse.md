# ListEndpointsResponse

A response containing bidder endpoints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoints** | [**List[Endpoint]**](Endpoint.md) | List of bidder endpoints. | [optional] 
**next_page_token** | **str** | A token which can be passed to a subsequent call to the &#x60;ListEndpoints&#x60; method to retrieve the next page of results in ListEndpointsRequest.pageToken. | [optional] 

## Example

```python
from openapi_client.models.list_endpoints_response import ListEndpointsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListEndpointsResponse from a JSON string
list_endpoints_response_instance = ListEndpointsResponse.from_json(json)
# print the JSON string representation of the object
print(ListEndpointsResponse.to_json())

# convert the object into a dict
list_endpoints_response_dict = list_endpoints_response_instance.to_dict()
# create an instance of ListEndpointsResponse from a dict
list_endpoints_response_from_dict = ListEndpointsResponse.from_dict(list_endpoints_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


